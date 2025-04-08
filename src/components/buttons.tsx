import { Button } from "../models/interface";

interface ButtonProps {
  buttons: Button[];
  move: (button: Button) => void;
}

function RenderButtons({ buttons, move }: ButtonProps) {
  return (
    <div className="buttons-container">
      {buttons.map((button) => (
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
