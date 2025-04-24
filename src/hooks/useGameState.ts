import { useMemo, useState } from "react";
import { Button, GameState } from "../types/types";
import { chooseMove, determineWinner } from "../lib/helpers/choose-move";
import { Scores } from "../types/enums";

export function useGameState() {
  const [state, setState] = useState<GameState>({
    playerScore: 0,
    computerScore: 0,
    playerMove: "",
    computerMove: "",
    result: "",
  });

  const gameOver = useMemo(() => {
    return determineWinner({
      playerScore: state.playerScore,
      computerScore: state.computerScore,
    });
  }, [state.playerScore, state.computerScore]);

  function moveHandler(button: Button) {
    const { playerMove, computerMove, result } = chooseMove(button);

    setState((prev) => {
      const playerScore =
        result === Scores.PLAYER ? prev.playerScore + 1 : prev.playerScore;
      const computerScore =
        result === Scores.COMPUTER
          ? prev.computerScore + 1
          : prev.computerScore;

      return {
        ...prev,
        playerMove,
        computerMove,
        result,
        playerScore,
        computerScore,
      };
    });
  }

  function reset() {
    setState({
      playerScore: 0,
      computerScore: 0,
      playerMove: "",
      computerMove: "",
      result: "",
    });
  }

  return {
    ...state,
    gameOver,
    moveHandler,
    reset,
  };
}
