import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "./Input/GuessInput";
import {GuessList} from "./Render/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [userGuess, setUserGuess] = React.useState([]);

    function submitGuess(value) {
        console.log({guess: value});
        const nextGuess = [...userGuess, {
            id: crypto.randomUUID(),
            content: value,
        }];

        setUserGuess(nextGuess);
    }

    return <>
        <GuessList userGuess={userGuess}/>
        <GuessInput submitGuess={submitGuess}/>
    </>;
}

export default Game;
