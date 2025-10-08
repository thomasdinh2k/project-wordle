import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "./Input/GuessInput";
import {GuessList} from "./Render/GuessList";
import {Guess} from "./Render/Guess";
import Banner from "./Render/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const initializeUserGuess = [];
    for (let i = 1; i <= 5; i += 1) {
        initializeUserGuess.push(
            {
                id: `Guess-${i}`,
                content: "",
            },
        )
    }


    const [userGuess, setUserGuess] = React.useState(initializeUserGuess);

    const [userTurn, setUserTurn] = React.useState(0);

    const [gameState, setGameState] = React.useState('idle');

    function submitGuess(value) {
        const nextGuess = [...userGuess];
        const index = nextGuess.findIndex(i => i.content === "")
        const nextTurn = userTurn + 1
        setUserTurn(nextTurn);

        nextGuess[index].content = value;

        setUserGuess(nextGuess);

        if (nextTurn === 5) {
            setGameState('lose');
        }

        if (value === answer) {
            setGameState('win');
        }


    }

    return <>
        <Guess userGuess={userGuess} correctAnswer={answer}/>

        <div className="guess-results">
            {
                gameState === "idle"
                    ? <GuessInput submitGuess={submitGuess}/>
                    : <Banner
                        userTurn={userTurn}
                        correctAnswer={answer}
                        gameState={gameState}
                    />

            }
        </div>
    </>;
}

export default Game;
