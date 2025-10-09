import React from "react";
import {validateGuess} from "../../../game-helpers";

export default function GuessInput({submitGuess}) {
    const [text, setText] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const checkValid = validateGuess(text);
        if (checkValid) {
            window.alert(checkValid);
            return;
        }
        submitGuess(text);
        setText("");
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess</label>
            <span className={'character-count'}>{text.length}</span>
            <input id="guess-input" type="text"
                   value={text}
                   onChange={(event) => {
                       const uppercasedValue = event.target.value.toUpperCase();
                       setText(uppercasedValue);
                   }}/>
        </form>
    );
}