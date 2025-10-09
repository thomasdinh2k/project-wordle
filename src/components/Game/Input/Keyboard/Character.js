import clsx from "clsx";

export const KeyboardCharacter = ({
                                      children, onButtonClick, state
}) => {


    return (
        <button
            className={clsx(
                'keyboard-character',
                {
                    "incorrect": state === "incorrect",
                    "misplaced": state === "misplaced",
                },
            )}
            onClick={() => onButtonClick(children)}
        >{children}</button>
    )

}