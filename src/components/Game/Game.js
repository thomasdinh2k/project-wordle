import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "./Input/GuessInput";
import {GuessList} from "./Render/GuessList";
import {Guess} from "./Render/Guess";

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
        );
    }
    ;

    const [userGuess, setUserGuess] = React.useState(initializeUserGuess);

    function submitGuess(value) {
        console.log({guess: value});

        const nextGuess = [...userGuess];
        nextGuess[nextGuess.findIndex(i => i.content === "")].content = value;

        console.log("nextGuess", nextGuess);

        setUserGuess(nextGuess);
    }

    return <>
        <Guess userGuess={userGuess}/>
        <GuessList userGuess={userGuess}/>
        <GuessInput submitGuess={submitGuess}/>
    </>;
}

export default Game;
