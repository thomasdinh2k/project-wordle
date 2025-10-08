import {checkGuess} from "../../../game-helpers";
import clsx from "clsx";

export function Guess({userGuess, correctAnswer}) {


    const calculatedUserGuess = [...userGuess].map((guess) => {

        return {
            ...guess,
            status: checkGuess(guess.content, correctAnswer)
        }
    })


    console.log('calculated', calculatedUserGuess);

    return (
        <>
            {calculatedUserGuess.map(({id, status}) => (
                <p key={id} className={"guess"}>
                    {
                        status === null
                            ? Array.from({length: 5}).fill("").map((i, idx) => (
                                <span key={idx} className="cell"></span>
                            ))
                            : status.map(({letter, status}, index) => (
                                <span key={index}
                                      className={clsx(
                                          'cell',
                                          {
                                              'correct': status === 'correct',
                                              'misplaced': status === 'misplaced',
                                              'incorrect': status === 'incorrect'
                                          }
                                      )}
                                >
                                    {letter}</span>
                            ))

                    }
                </p>
            ))}
        </>
    );
}