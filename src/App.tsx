import "./App.css";
import {  useState } from "react";
import { RenderButtons } from "./components/buttons";
import { Results } from "./components/results";
import { chooseMove, determineWinner } from "./helpers/choose-move";
import { Button } from "./models/interface";
import { Scores } from "./models/enums";
import { RenderHeader } from "./components/header-and-scores";
import { Winner } from "./components/winner";

function App() {
  /*
    შეგიძლია თამაშის სტეიტი ერთ useState ში აღწერო,
    იდეალური ადგილია ქასთომ ჰუკისთვის
    const  {playerScore, computerScore, playerMove, computerMove, result, reset}  = useGameState()
    სეპარაციას მოახდენ ui ის data ლეიერტან,  მხოლოდ საჭირო სტეიტს და მეთოდს დააბრუნებ რაც კომპონენტს ჭირდება
  */
  const [playerScore, countPlayerScore] = useState(0);
  const [computerScore, countComputerScore] = useState(0);
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");
  /*
    determineWinner ფუნქცია გამოიძახება თავიდან, როცა რომელიმე ზემოთ აღწერილი სტეიტი შეიცვლება.
    ჩვენ შემთხვევაში გვინდა მხოლოდ "playerScore, computerScore" სტეიტების ცვლილებისას გამოთვალოს თავიდან,
    შეგიძლია useMemo გამოიყენო, დეფენდენსად მიცე playerScore და computerScore https://react.dev/reference/react/useMemo
     და მხოლოდ დეფენდეს ქიების ცვლილებაზე მოახდენს თავიდან კალკულააციას
    const gameOver = useMemo(() => { return determineWinner({ playerScore, computerScore })}, [playerScore, computerScore]);
  */
  const gameOver = determineWinner({ playerScore, computerScore });

  /*
    უმჯობესია ფუნცქციის დეკლარაცია გამოიყენო ვიდრე ექსპრეშენი
    hoisting ერორს არიდებ თავიდან, ყოველ რენდერზე არ მოხდება ფუნქციის რედეკლარაცია
    უფრო კითხვადი და გასაგებია
    function chooseMoveHandler(){}
  */
  const chooseMoveHandler = (button: Button) => {
    const { playerMove, computerMove, result } = chooseMove(button);
    setPlayerMove(playerMove);
    setComputerMove(computerMove);
    setResult(result);

    if (result === Scores.PLAYER) {
      countPlayerScore((prev) => prev + 1);
    } else if (result === Scores.COMPUTER) {
      countComputerScore((prev) => prev + 1);
    }
  };

  // აქაც ფუნცქციის დეკლარაცია გამოიყენე
  const reset = () => {
    countPlayerScore(0);
    countComputerScore(0);
    setPlayerMove("");
    setComputerMove("");
    setResult("");
  };

  return (
    <div>
      {/* კომპონენტის სახელად ჯასთ Header მგონი უკეთესი იქნება  */}
      <RenderHeader score={{ playerScore, computerScore }} reset={reset} />
      {gameOver ? (
        <Winner score={{ playerScore, computerScore }} />
      ) : (
        <div>
          {/* აქქაც Buttons სახელად */}
          <RenderButtons move={chooseMoveHandler} />
          <Results
            results={{
              playerMove,
              computerMove,
              result,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
