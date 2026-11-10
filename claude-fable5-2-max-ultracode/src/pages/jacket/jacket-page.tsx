import "@fontsource-variable/sofia-sans-extra-condensed/wght.css";
import "@fontsource-variable/baskervville/wght.css";
import "@fontsource-variable/baskervville/wght-italic.css";
import { BackCover } from "./back-cover";
import { BackFlap } from "./back-flap";
import { Bookmark } from "./bookmark";
import { CoverFoot } from "./cover-foot";
import { FlapSummary } from "./flap-summary";
import { FrontCover } from "./front-cover";
import { FrontFlap } from "./front-flap";
import { JacketInside } from "./jacket-inside";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { Spine } from "./spine";
import { useJacketUpload } from "./use-jacket-upload";
import { useQuoteMark } from "./use-quote-mark";

export function JacketPage() {
  const upload = useJacketUpload();
  const { markedQuote, markQuote } = useQuoteMark();

  return (
    <div className="jacket min-h-dvh bg-jacket-yellow font-jacket-text text-jacket-black">
      <title>Ratio Reader: read the jacket first</title>
      <input {...upload.inputProps} />
      <SiteHeader onUpload={upload.openFromFront} />
      <main>
        <div className="jacket-half jacket-half--front">
          <FrontCover pick={upload.frontPick} onUpload={upload.openFromFront} />
          <FrontFlap>
            <FlapSummary markedQuote={markedQuote} onCite={markQuote} />
            <Bookmark />
          </FrontFlap>
          <CoverFoot />
          <Spine side="left" />
        </div>
        <div className="jacket-half jacket-half--back">
          <BackCover markedQuote={markedQuote} />
          <BackFlap />
          <Spine side="right" duplicate />
        </div>
        <JacketInside pick={upload.insidePick} onUpload={upload.openFromInside} />
      </main>
      <SiteFooter />
    </div>
  );
}
