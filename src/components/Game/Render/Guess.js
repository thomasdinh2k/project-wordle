import {range} from "../../../utils";
import {useState} from "react";

export function Guess({userGuess}) {
    // const [boardRow, setBoardRow] = useState(
    // );

    const transformedUserGuessToBoard = userGuess.map(() => {

    });

    return (
        <div className="guess-results">
            {userGuess.map(({id, content}) => {
                content.length === 0
                    ? Array.from(5).fill("").map((i, idx) => (
                        <p key={idx} className={"guess"}>
                            {content
                                .split("")
                                .map((letter, index) => (
                                    <span key={index} className="cell">{letter}</span>
                                ))}
                        </p>
                    ))
                    : <p key={id} className="guess">
                        {content
                            .split("")
                            .map((letter, index) => (
                                <span key={index} className="cell">{letter}</span>
                            ))}
                    </p>;
            })}
            {/*<p className="guess">*/}
            {/*    <span className="cell">H</span>*/}
            {/*    <span className="cell">E</span>*/}
            {/*    <span className="cell">L</span>*/}
            {/*    <span className="cell">L</span>*/}
            {/*    <span className="cell">O</span>*/}
            {/*</p>*/}
        </div>
    );
}