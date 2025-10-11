import clsx from "clsx";

export const KeyboardCharacter = ({
                                      children, onButtonClick, state,
                                  }) => {


    return (
        <button
            className={clsx(
                "keyboard-character",
                {
                    "correct": state === "correct",
                    "incorrect": state === "incorrect",
                    "misplaced": state === "misplaced",
                },
            )}
            onClick={() => onButtonClick(children)}
        >{children}</button>
    );

};