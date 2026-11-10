import "@fontsource-variable/besley/wght.css";
import "@fontsource-variable/besley/wght-italic.css";
import "@fontsource/andika/400.css";
import "@fontsource/andika/700.css";
import "@fontsource/andika/400-italic.css";
import { HintsPage } from "./hints-page";
import { InsightsPage } from "./insights-page";
import { LessonPdf } from "./lesson-pdf";
import { LessonSpread } from "./lesson-spread";
import { LessonYourPdf } from "./lesson-your-pdf";
import { SPREAD_LESSONS } from "./lessons";
import { PrimerFooter } from "./primer-footer";
import { PrimerHeader } from "./primer-header";
import { QuotesPage } from "./quotes-page";
import { SummaryPage } from "./summary-page";
import { useUploadDesk } from "./use-upload-desk";

export function PrimerPage() {
  const desk = useUploadDesk();

  return (
    <div className="primer min-h-dvh overflow-x-clip bg-primer-paper font-primer-sans text-pretty text-primer-ink">
      <title>Ratio Reader: upload a PDF, get a summary, hints, quotes and insights</title>
      <input {...desk.inputProps} />
      <div className="mx-auto max-w-[96rem]">
        <PrimerHeader onUpload={() => desk.askFrom("lesson-1")} />
        <main>
          <LessonPdf pick={desk.pickAt("lesson-1")} onUpload={() => desk.askFrom("lesson-1")} />
          <LessonSpread lesson={SPREAD_LESSONS.summary}>
            <SummaryPage />
          </LessonSpread>
          <LessonSpread lesson={SPREAD_LESSONS.hints}>
            <HintsPage />
          </LessonSpread>
          <LessonSpread lesson={SPREAD_LESSONS.quotes}>
            <QuotesPage />
          </LessonSpread>
          <LessonSpread lesson={SPREAD_LESSONS.insights}>
            <InsightsPage />
          </LessonSpread>
          <LessonYourPdf pick={desk.pickAt("lesson-6")} onUpload={() => desk.askFrom("lesson-6")} />
        </main>
        <PrimerFooter />
      </div>
    </div>
  );
}
