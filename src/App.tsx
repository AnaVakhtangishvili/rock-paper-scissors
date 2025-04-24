import "./App.css";
import { Buttons } from "./components/Buttons";
import { Results } from "./components/Results";
import { Header } from "./components/Header";
import { Winner } from "./components/Winner";
import { useGameState } from "./hooks/useGameState";

function App() {
  const {
    playerScore,
    computerScore,
    playerMove,
    computerMove,
    result,
    gameOver,
    moveHandler,
    reset,
  } = useGameState();

  return (
    <div>
      <Header
        score={{ playerScore, computerScore }}
        gameOver={!!gameOver}
        reset={reset}
      />
      {gameOver ? (
        <Winner winner={gameOver} />
      ) : (
        <div>
          <Buttons move={moveHandler} />
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
