// *აქაც /lib/config/*.ts იდეალური ადგილი იქნება სტატიკური კონფიგურაციისთვის

import { Button } from "../models/interface";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import lizard from "../assets/lizard.png";
import spock from "../assets/spock.png";
import { Moves } from "../models/enums";

const buttonsConfig: Button[] = [
  { name: Moves.ROCK, value: 0, image: rock },
  { name: Moves.PAPER, value: 1, image: paper },
  { name: Moves.SCISSORS, value: 2, image: scissors },
  { name: Moves.LIZARD, value: 3, image: lizard },
  { name: Moves.SPOCK, value: 4, image: spock },
];

const winningMoves = {
  Rock: [Moves.SCISSORS, Moves.LIZARD],
  Paper: [Moves.ROCK, Moves.SPOCK],
  Scissors: [Moves.PAPER, Moves.LIZARD],
  Lizard: [Moves.SPOCK, Moves.PAPER],
  Spock: [Moves.SCISSORS, Moves.ROCK],
};

export { buttonsConfig, winningMoves };
