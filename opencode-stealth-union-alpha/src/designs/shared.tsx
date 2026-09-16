import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Check, FileText, Lightbulb, Quote, Upload, X } from 'lucide-react';

const names = ['The Editorial', 'Electric Ideas', 'The Quiet Mind', 'Signal / Noise', 'The Observatory'];

export function DesignSwitcher({ current }: { current: number }) {
  return <nav className="design-switcher" aria-label="Explore landing page designs"><span>EXPLORE</span>{names.map((name, index) => <Link key={name} to={`/${index + 1}`} title={name} aria-label={`Design ${index + 1}: ${name}`} aria-current={current === index + 1 ? 'page' : undefined} onClick={() => window.scrollTo(0, 0)}>{index + 1}</Link>)}</nav>;
}

const demoContent = {
  Summary: { icon: BookOpen, title: 'Attention is a skill. Not a resource.', text: 'The art of focused work argues that meaningful progress comes from protecting uninterrupted time, rather than fitting more tasks into your day.', points: ['Switching between tasks leaves an attention residue that makes it harder to think deeply.', 'A small, repeatable focus ritual is more sustainable than relying on motivation.', 'Measure what you finish, not how busy you feel.'], source: 'Based on the sample document · pages 1–8' },
  Quotes: { icon: Quote, title: 'The words worth keeping.', text: '“The quality of your attention determines the quality of what you create.”', points: ['“A clear boundary is not a restriction. It is an invitation to go deeper.” — page 3', '“Start with one quiet hour. Protect it. See what happens.” — page 7'], source: 'Illustrative quotes from our sample document' },
  Insights: { icon: Lightbulb, title: 'Connect the dots.', text: 'Being productive and being constantly available are often at odds. The document invites you to design your environment around the work that matters.', points: ['Try this: block a 45-minute window tomorrow with notifications off.', 'Ask yourself: which task would make everything else easier?', 'Reading hint: revisit the focus ritual on page 5 before building your own.'], source: 'Reader prompts · sample insights' },
};
type DemoTab = keyof typeof demoContent;

export function DemoButton({ children, className = '', label }: { children?: ReactNode; className?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  return <><button type="button" className={className} onClick={() => setOpen(true)}>{children || label || 'Try Ratio free'}</button>{open && <DemoModal close={() => setOpen(false)} />}</>;
}

function DemoModal({ close }: { close: () => void }) {
  const [tab, setTab] = useState<DemoTab>('Summary');
  const [sample, setSample] = useState(false);
  const [filename, setFilename] = useState('');
  const [error, setError] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const content = demoContent[tab];
  const Icon = content.icon;
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') {
        const focusable = dialog.current?.querySelectorAll<HTMLElement>('button, input, [tabindex="0"]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog.current)) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', onKey); previous?.focus(); };
  }, [close]);
  function selectFile(file?: File) {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.pdf')) { setError('Please choose a PDF file.'); return; }
    if (file.size > 20 * 1024 * 1024) { setError('Please choose a PDF smaller than 20 MB.'); return; }
    setError(''); setFilename(file.name);
  }
  return createPortal(<div className="ratio-modal-backdrop" onClick={event => { if (event.target === event.currentTarget) close(); }}><div className="ratio-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" tabIndex={-1} ref={dialog}><button className="ratio-modal-close" onClick={close} aria-label="Close demo"><X size={20} /></button><div className="ratio-modal-brand"><BookOpen size={21} /> ratio reader <span>INTERACTIVE PREVIEW</span></div><h2 id="demo-title">A little reading.<br /><em>A lot of clarity.</em></h2><p>See what Ratio can do with an example, or choose a PDF.</p>{!sample ? <><button className="ratio-dropzone" onClick={() => input.current?.click()} onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); selectFile(event.dataTransfer.files[0]); }}><Upload size={29} /><strong>{filename || 'Drop a PDF here, or browse'}</strong><span>PDF files up to 20 MB · kept on your device</span></button><input ref={input} type="file" accept="application/pdf,.pdf" hidden onChange={event => selectFile(event.target.files?.[0])} />{error && <p role="alert" className="ratio-demo-error">{error}</p>}{filename && <div className="ratio-demo-notice"><Check size={18} /><p><strong>Your PDF is selected.</strong> This is a product preview; document processing isn’t connected yet. Explore the sample below to see the reading experience.</p></div>}<button className="ratio-sample-button" onClick={() => setSample(true)}>Explore a sample document <ArrowRight size={18} /></button><small>No account needed. No file is uploaded.</small></> : <div className="ratio-demo-result"><div className="ratio-demo-file"><FileText size={17} /><span>The art of focused work.pdf</span><span>8 pages</span></div><div className="ratio-demo-tabs" role="tablist" aria-label="Sample insights">{(Object.keys(demoContent) as DemoTab[]).map(item => <button key={item} role="tab" aria-selected={tab === item} onClick={() => setTab(item)}>{item}</button>)}</div><div className="ratio-demo-panel" role="tabpanel"><Icon size={23} /><h3>{content.title}</h3><p>{content.text}</p><ul>{content.points.map(point => <li key={point}>{point}</li>)}</ul><small>{content.source}</small></div><button className="ratio-back-button" onClick={() => setSample(false)}>Back to upload</button></div>}</div></div>, document.body);
}
