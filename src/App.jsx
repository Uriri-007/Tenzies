import { useState } from "react";
import Dice from "./Dice";

export default function Tenzies() {
  const [dice, setDice] = useState({})
  
  return (
      <main>
        <div className="container">
          <Dice value={1} />
          <Dice value={2} />
          <Dice value={3} />
          <Dice value={4} />
          <Dice value={5} />
          <Dice value={6} />
          <Dice value={1} />
          <Dice value={2} />
          <Dice value={3} />
          <Dice value={4} />
        </div>
        <button type="button" className="roll">Roll</button>
      </main>
  );
}
