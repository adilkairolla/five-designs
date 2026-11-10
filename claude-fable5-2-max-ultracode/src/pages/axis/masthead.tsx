import { JumpLink } from "@/components/jump-link";
import { CAPTION, UPLOAD } from "./axis-copy";
import { HeroHeading } from "./hero-heading";
import { UploadRow } from "./upload-row";
import { Wordmark } from "./wordmark";

function HeroIdle() {
  return (
    <p>
      <JumpLink to="axis-sample" className="axis-link">
        {UPLOAD.seeSample}
      </JumpLink>
      {UPLOAD.seeSampleRest}
    </p>
  );
}

export function Masthead() {
  return (
    <header className="axis-masthead">
      <div className="axis-row axis-masthead-row">
        <Wordmark />
        <p className="axis-right axis-quiet">{CAPTION}</p>
      </div>
      <HeroHeading />
      <UploadRow idle={<HeroIdle />} />
    </header>
  );
}
