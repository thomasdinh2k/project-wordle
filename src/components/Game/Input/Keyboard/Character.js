import clsx from "clsx";

export const KeyboardCharacter = ({
                                      children, onButtonClick, state, isSpecialChar,
                                  }) => {


    return (
        <button
            className={clsx(
                "keyboard-character",
                {
                    "special": isSpecialChar,
                    "correct": state === "correct",
                    "incorrect": state === "incorrect",
                    "misplaced": state === "misplaced",
                },
            )}
            onClick={() => onButtonClick(children)}
        >{children}</button>
    );

};