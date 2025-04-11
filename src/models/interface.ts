// *აქაც არანაირი მნიშნველობა არ აქვს რომელ /ფოლდერ/ფაილში აღწერ ტიპებს
// *  /models/*.ts ნაცვლად /types/*.ts ვიყენებთ უფრო კითხვაიდა ფოლდერ სტუქტურა

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
