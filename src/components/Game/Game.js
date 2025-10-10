import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "./Input/GuessInput";
import {GuessList} from "./Render/GuessList";
import {Guess} from "./Render/Guess";
import Banner from "./Render/Banner";
import {Keyboard} from "./Input/Keyboard/Keyboard";
import {checkGuess, validateGuess} from "../../game-helpers";

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
                status: null,
            },
        );
    }

    const [text, setText] = React.useState("");

    const [userGuess, setUserGuess] = React.useState(initializeUserGuess);

    const [userTurn, setUserTurn] = React.useState(0);

    const [gameState, setGameState] = React.useState("idle");

    const [calculatedUserGuess, setCalculatedUserGuess] = React.useState(initializeUserGuess);

    const [keyboardStatus, setKeyboardStatus] = React.useState({});

    function submitGuess(value) {
        // Validate
        const checkValid = validateGuess(text);
        if (checkValid) {
            window.alert(checkValid);
            return;
        }

        setText("");


        const nextGuess = [...userGuess];
        const index = nextGuess.findIndex(i => i.content === "");
        const nextTurn = userTurn + 1;
        setUserTurn(nextTurn);

        nextGuess[index].content = value;

        setUserGuess(nextGuess);

        if (nextTurn === 5) {
            setGameState("lose");
        }

        if (value === answer) {
            setGameState("win");
        }

        const calculatedUserGuess = [...userGuess].map((guess) => {

            return {
                ...guess,
                status: checkGuess(guess.content, answer),
            };
        });
        setCalculatedUserGuess(calculatedUserGuess);
        updateKeyboardStatus(calculatedUserGuess);
    }

    function updateKeyboardStatus(currentGuesses) {
        // Extract set of key
        const keys = keyboardStatus;
        currentGuesses.forEach((guess) => {
            if (!guess.status) return;
            guess.status.forEach(({letter, status}) => {
                keys[letter] = status;
            });
        });

        setKeyboardStatus(keys);
    }

    return <>
        <Guess calculatedUserGuess={calculatedUserGuess}/>

        <div className="guess-results">
            {
                gameState === "idle"
                    ? <GuessInput submitGuess={submitGuess} text={text} setText={setText}/>
                    : <Banner
                        userTurn={userTurn}
                        correctAnswer={answer}
                        gameState={gameState}
                    />

            }
        </div>

        <Keyboard keyboard={keyboardStatus} text={text} setText={setText} submitGuess={submitGuess}/>
    </>;
}

export default Game;
