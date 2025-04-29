import { Moves } from "./enums";

export type Button = {
  name: Moves;
  value: number;
  image: string;
};

export type Score = {
  playerScore: number;
  computerScore: number;
};

export type Result = {
  playerMove: string;
  computerMove: string;
  result: string;
};

export type GameState = {
  playerScore: number;
  computerScore: number;
  playerMove: string;
  computerMove: string;
  result: string;
};
