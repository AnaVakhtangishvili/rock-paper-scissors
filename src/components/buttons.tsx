import { buttonsConfig } from "../constants/buttons.config";
import { Button } from "../models/interface";

interface ButtonProps {
  move: (button: Button) => void;
}

function RenderButtons({ move }: ButtonProps) {
  return (
    <div className="buttons-container">
      {buttonsConfig.map((button) => (
        <button
          className="icon-button"
          key={button.value}
          onClick={() => move(button)}
        >
          <img className="game-icon" src={button.image} alt={button.name} />
          <p>{button.name}</p>
        </button>
      ))}
    </div>
  );
}

export { RenderButtons };
