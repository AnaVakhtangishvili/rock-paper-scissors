export interface Button {
  name: string;
  value: number;
  image: string;
}

export interface Score {
  playerScore: number;
  computerScore: number;
}

export interface Result {
  playerMove: string;
  computerMove: string;
  result: string;
}
