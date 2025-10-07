import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "./Input/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {

    function submitGuess(value) {
        console.log({guess: value});
    }

    return <>
        <GuessInput submitGuess={submitGuess}/>
    </>;
}

export default Game;
