import { finalResult } from "../helpers/choose-move";
import { Score } from "../models/interface";

interface WinnerProps {
  score: Score;
}

function Winner({ score }: WinnerProps) {
  return (
    <div className="final-result">
      <h1>{finalResult(score)}</h1>
    </div>
  );
}

export { Winner };
