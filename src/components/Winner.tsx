interface WinnerProps {
  winner: string;
}

function Winner({ winner }: WinnerProps) {
  return (
    <div className="final-result">
      <p>{winner}</p>
    </div>
  );
}

export { Winner };
