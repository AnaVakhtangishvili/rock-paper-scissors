import { finalResult } from "../helpers/choose-move";
import { Score } from "../models/interface";

interface HeaderProps {
  score: Score;
  reset: () => void;
}

function RenderHeader({ score, reset }: HeaderProps) {
  return (
    <div>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <a
        className="rules"
        href="https://www.youtube.com/watch?v=pIpmITBocfM"
        target="_blank"
      >
        Rules
      </a>
      <div className="score-container">
        <div>
          <h2>You</h2>
          <p className="score">{score.playerScore}</p>
        </div>
        <button className="reset-button" onClick={reset}>
          {finalResult(score) ? "Play again" : "Reset score"}
        </button>
        <div>
          <h2>Computer</h2>
          <p className="score">{score.computerScore}</p>
        </div>
      </div>
    </div>
  );
}

export { RenderHeader };
