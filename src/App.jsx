import { useState, useEffect } from "react";
import Confetti from "react-confetti"
import Die from "./Die";
function generateNewDie() {
    const randomX = Math.random();
    const value = (Math.floor(randomX * 6) + 1);
    return {
        value,
        isHeld: false,
        id: randomX
    };
}
    function allNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
        const newDice = generateNewDie()
        dice.push(newDice);
    }
    return dice;
}
    const allDice = allNewDice()

export default function Tenzies() {
    const [tenzies, setTenzies] = useState(false);
    const [rolls, setRolls] = useState(0);
    const [dice, setDice] = useState(allDice);
   
    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld === true);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
        }
    }, [dice]);

    function rollDie() {
        if (!tenzies) {
            setRolls(prev => prev + 1);
            setDice(prev => prev.map(die => (die.isHeld === true ? die : generateNewDie())));
        } else {
            setDice(allNewDice());
            setRolls(0);
            setTenzies(false);
        }
    }

    function holdDie(id) {
        setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die));
    }

    return (
      <>
        <main>
          {tenzies && <Confetti />}
          <h1>Tenzies</h1>
          <summary>Hint:
            <details>Roll the dice and lock all of them with corresponding numbers by clicking it</details>
          </summary>
            <div className="container">
                {dice.map(die => (
                    <Die
                        key={die.id}
                        id={die.id}
                        value={die.value}
                        isHeld={die.isHeld}
                        handleClick={holdDie}
                    />
                ))}

            </div>
            <button type="button" className="roll" onClick={rollDie}>
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
        <footer>
          <p>Uri Docs &copy; 2025</p>
        </footer>
        </>
    );
}
