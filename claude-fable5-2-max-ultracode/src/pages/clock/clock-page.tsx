import "@fontsource-variable/archivo/standard.css";
import { scrollToSection } from "@/lib/scroll-to-section";
import { Closing } from "./closing";
import { Faq } from "./faq";
import { Fraction } from "./fraction";
import { Hero } from "./hero";
import { PaceSection } from "./pace-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { Steps } from "./steps";
import { Timeline } from "./timeline";
import { useClockLifecycle } from "./use-clock-lifecycle";
import { useUpload } from "./use-upload";

export function ClockPage() {
  const { pick, site, openFrom, clear, inputProps } = useUpload();
  useClockLifecycle();

  // An upload message has done its job once the visitor goes to the sample it points to.
  const seeSample = () => {
    clear();
    scrollToSection("clock-sample");
  };

  return (
    <div className="clock min-h-dvh bg-clock-ground font-clock-sans text-[1.0625rem]/[1.55] text-pretty text-clock-white antialiased md:text-[1.125rem]/[1.55]">
      <title>Ratio Reader: upload a long PDF, start with the summary</title>
      <input {...inputProps} />
      <SiteHeader
        pick={pick}
        active={site === "header"}
        onUpload={() => openFrom("header")}
        onClose={clear}
        onSeeSample={seeSample}
      />
      <main>
        <Hero pick={pick} active={site === "hero"} onUpload={() => openFrom("hero")} onSeeSample={seeSample} />
        <Fraction />
        <Timeline />
        <PaceSection onSeeSample={seeSample} />
        <Steps />
        <Faq />
        <Closing
          pick={pick}
          active={site === "closing"}
          onUpload={() => openFrom("closing")}
          onSeeSample={seeSample}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
