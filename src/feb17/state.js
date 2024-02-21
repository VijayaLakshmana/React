import { useState } from 'react';

export default function StateButton() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
}
function Counter() {
  const [score, setScore] = useState(0);
 
  return (
    <div >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
