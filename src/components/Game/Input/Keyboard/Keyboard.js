import {qwertyKeyboard} from "../../../../utils";
import {KeyboardCharacter} from "./Character";

export const Keyboard = ({keyboard, text, setText, submitGuess}) => {
    const handleCLickButton = (char) => {
        if (char === "backspace") {
            handleBackspace();
            return;
        }
        if (char === "enter") {
            handleEnter();
            return;
        }
        const nextText = text.concat(char.toUpperCase());
        setText(nextText);
    };

    const handleBackspace = () => {
        if (text.length <= 0) return;
        const nextText = text.slice(0, -1);
        console.log("next", nextText);
        setText(nextText);
    };

    const handleEnter = () => {
        submitGuess(text);
    };

    const calculateKeyboardState = (letter) => {
        const char = letter.toUpperCase();
        if (
            keyboard[char] !== undefined
        ) {
            return keyboard[char];
        }
    };

    return <>
        {qwertyKeyboard.map((row, rowIdx) => {
            return <div className={"keyboard-row"} key={rowIdx}>
                {row.map((char, charIdx) => <KeyboardCharacter
                    key={charIdx}
                    className={"keyboard-character"}
                    onButtonClick={handleCLickButton}
                    state={calculateKeyboardState(char)}
                >
                    {char}
                </KeyboardCharacter>)}
            </div>;
        })}

    </>;
};