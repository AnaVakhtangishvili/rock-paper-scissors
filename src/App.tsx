import "./App.css";
import { useState } from "react";
import { RenderButtons } from "./components/buttons";
import { Results } from "./components/results";
import { buttonsConfig } from "./constants/buttons.config";
import { chooseMove, finalResult } from "./helpers/choose-move";
import { Button } from "./models/interface";
import { Winners } from "./models/enums";
import { RenderHeader } from "./components/header-and-scores";
import { Winner } from "./components/winner";

function App() {
  const [playerScore, countPlayerScore] = useState(0);
  const [computerScore, countComputerScore] = useState(0);
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");
  const gameOver = finalResult({ playerScore, computerScore });

  const chooseMoveHandler = (button: Button) => {
    const { playerMove, computerMove, result } = chooseMove(button);
    setPlayerMove(playerMove);
    setComputerMove(computerMove);
    setResult(result);

    if (result === Winners.PLAYER) {
      countPlayerScore((prev) => prev + 1);
    } else if (result === Winners.COMPUTER) {
      countComputerScore((prev) => prev + 1);
    }
  };

  const reset = () => {
    countPlayerScore(0);
    countComputerScore(0);
    setPlayerMove("");
    setComputerMove("");
    setResult("");
  };

  return (
    <div>
      <RenderHeader score={{ playerScore, computerScore }} reset={reset} />
      {gameOver ? (
        <Winner score={{ playerScore, computerScore }} />
      ) : (
        <div>
          <RenderButtons buttons={buttonsConfig} move={chooseMoveHandler} />
          <Results
            results={{
              playerMove,
              computerMove,
              result,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
