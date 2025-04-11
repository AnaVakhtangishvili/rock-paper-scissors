// რეაქტი არ გვაძალებს ფაილის ან კომპონენტის სახელს რა უნდა ერქვას.
// მაგრამ ჯობია რომ ფაილის სახელი იყოს შესაბამისი კომპონენტის სახელის
// როცა აპლიკაცია იზრდება რთულია მოძებნო კონკრეტული კომპონენტი როცა სახელი არ ემთხვევა
// კომპონენტის სახელი ჯობია ქემელქეისში იყოს ამ შემთხვევაში RenderButtons

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
