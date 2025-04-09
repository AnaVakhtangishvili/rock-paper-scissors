import { determineWinner } from "../helpers/choose-move";
import { Score } from "../models/interface";

interface WinnerProps {
  score: Score;
}

function Winner({ score }: WinnerProps) {
  return (
    <div className="final-result">
      <p>{determineWinner(score)}</p>
    </div>
  );
}

export { Winner };
