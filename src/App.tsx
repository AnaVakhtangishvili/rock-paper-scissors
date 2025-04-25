import "./App.css";
import { useGameState } from "./hooks/useGameState";
import { Buttons } from "./components/Buttons";
import { Results } from "./components/Results";
import { Winner } from "./components/Winner";
import { Header } from "./components/Header";

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
