import { buttonsConfig, winningMoves } from "../constants/buttons.config";
import { Moves, Scores, Winners } from "../models/enums";
import { Button } from "../models/interface";

function chooseMove(button: Button) {
  const playerMove = button.name;
  const computerMove = getRandomMove();
  const result = determineScorer(playerMove, computerMove);
  return { playerMove, computerMove, result };
}

function getRandomMove() {
  const randomIndex = Math.floor(Math.random() * buttonsConfig.length);
  return buttonsConfig[randomIndex].name;
}

function determineScorer(playerMove: Moves, computerMove: Moves) {
  if (playerMove === computerMove) {
    return Scores.TIE;
  }
  if (winningMoves[playerMove].includes(computerMove)) {
    return Scores.PLAYER;
  } else {
    return Scores.COMPUTER;
  }
}

function determineWinner(score: {
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

export { chooseMove, determineWinner };
