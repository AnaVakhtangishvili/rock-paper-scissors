// *აქაც მსგავსი (კომოონენტის სახელი და ფაილის სახელი შევცვალოთ) რაც buttons.tsx-ში დაგიწერე
import { determineWinner } from "../helpers/choose-move";
import { Score } from "../models/interface";

interface HeaderProps {
  score: Score;
  reset: () => void;
}

function RenderHeader({ score, reset }: HeaderProps) {
  return (
    <div>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <a
        className="rules"
        href="https://www.youtube.com/watch?v=pIpmITBocfM"
        target="_blank"
      >
        Rules
      </a>
      <div className="score-container">
        <div className="score-box">
          <h2>You</h2>
          <p className="score">{score.playerScore}</p>
        </div>
        <button className="reset-button" onClick={reset}>
          {/* მშობელში უკე ახდენ ამ ფუნქციის გამოძახებას,  ამ შემთხვევაში არ არი მძიმე კალკულაცია.
              წარმოიდგინე რო ეს ფუნქცია აკეთებს რამე მძიმე კალკულაციას (დროში გაწელილს),  კიდევ აქ გამოძახება და გამოთვლა არ იქნება ოპტიმალური
              შეგიძლია isOver={!!determineWinner(score)} პროპსი ჩამოაწოდო მშობლიდან
          */}
          {determineWinner(score) ? "Play again" : "Reset score"}
        </button>
        <div className="score-box">
          <h2>Computer</h2>
          <p className="score">{score.computerScore}</p>
        </div>
      </div>
    </div>
  );
}

export { RenderHeader };
