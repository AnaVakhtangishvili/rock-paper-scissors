import { buttonsConfig, winningMoves } from "../constants/buttons.config";
import { Winners } from "../models/enums";
import { Button } from "../models/interface";

function chooseMove(button: Button) {
  const playerMove = button.name;
  const computerMove = getRandomMove();
  const result = determineWinner(playerMove, computerMove);
  return { playerMove, computerMove, result };
}

function getRandomMove() {
  const randomIndex = Math.floor(Math.random() * buttonsConfig.length);
  return buttonsConfig[randomIndex].name;
}

function determineWinner(playerMove: string, computerMove: string) {
  if (playerMove === computerMove) {
    return Winners.TIE;
  }
  if (
    winningMoves[playerMove as keyof typeof winningMoves].includes(computerMove)
  ) {
    return Winners.PLAYER;
  } else {
    return Winners.COMPUTER;
  }
}

function finalResult(score: {
  playerScore: number;
  computerScore: number;
}): string | undefined {
  if (score.playerScore === 3 || score.computerScore === 3) {
    if (score.playerScore > score.computerScore) {
      return Winners.PLAYER;
    } else if (score.playerScore < score.computerScore) {
      return Winners.COMPUTER;
    }
  }
}

export { chooseMove, finalResult };
