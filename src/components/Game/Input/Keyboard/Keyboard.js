import {qwertyKeyboard} from "../../../../utils";
import {KeyboardCharacter} from "./Character";

export const Keyboard = () => {
    console.log(qwertyKeyboard)

    const handleCLickButton = (char) => {
        console.log(char);
    }

    return <>
        {qwertyKeyboard.map((row, rowIdx) => {
            return <div className={'keyboard-row'} key={rowIdx}>
                {row.map((char, charIdx) => <KeyboardCharacter
                    key={charIdx}
                    className={'keyboard-character'}
                    onButtonClick={handleCLickButton}
                    state={'idle'}
                >
                    {char}
                </KeyboardCharacter>)}
            </div>
        })}

    </>
}