import { Moves } from "./enums";

export interface Button {
  name: Moves;
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
