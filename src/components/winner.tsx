// *აქაც მსგავსი (კომოონენტის სახელი და ფაილის სახელი შევცვალოთ) რაც buttons.tsx-ში დაგიწერე

import { determineWinner } from "../helpers/choose-move";
import { Score } from "../models/interface";

interface WinnerProps {
  score: Score;
}

function Winner({ score }: WinnerProps) {
  return (
    <div className="final-result">
      {/* აქაც არ გინდა თავიდან კალკულაცია,  უკვე მშობლეში გამოთვლილი გაქ აიღე პროპსად winner={!!determineWinner(score)} */}
      <p>{determineWinner(score)}</p>
    </div>
  );
}

export { Winner };
