import { Button } from "../models/interface";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import lizard from "../assets/lizard.png";
import spock from "../assets/spock.png";

const buttonsConfig: Button[] = [
  { name: "Rock", value: 0, image: rock },
  { name: "Paper", value: 1, image: paper },
  { name: "Scissors", value: 2, image: scissors },
  { name: "Lizard", value: 3, image: lizard },
  { name: "Spock", value: 4, image: spock },
];

const winningMoves = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Scissors", "Rock"],
};

export { buttonsConfig, winningMoves };
