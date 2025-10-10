import React from "react";

export default function GuessInput({submitGuess, text, setText}) {


    function handleSubmit(e) {
        e.preventDefault();
        submitGuess(text);
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess</label>
            <span className={"character-count"}>{text.length}</span>
            <input id="guess-input" type="text"
                   value={text}
                   onChange={(event) => {
                       const uppercasedValue = event.target.value.toUpperCase();
                       setText(uppercasedValue);
                   }}/>
        </form>
    );
}