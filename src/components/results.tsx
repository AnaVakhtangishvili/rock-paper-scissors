// *აქაც მსგავსი (კომოონენტის სახელი და ფაილის სახელი შევცვალოთ) რაც buttons.tsx-ში დაგიწერე

import { Result } from "../models/interface";

interface ResultsProps {
  results: Result;
}

function Results({ results }: ResultsProps) {
  if (!results.playerMove || !results.computerMove) {
    return null;
  }
  return (
    <div className="results">
      <h4>
        Your move is <span className="move">{results.playerMove}</span>
      </h4>
      <h4>
        Computer's move is <span className="move">{results.computerMove}</span>
      </h4>
      <span className="result">{results.result}</span>
    </div>
  );
}

export { Results };
