export function Guess({userGuess}) {

    return (
        <div className="guess-results">
            {userGuess.map(({id, content}) => (

                <p key={id} className={"guess"}>
                    {
                        content.length === 0
                            ? Array.from({length: 5}).fill("").map((i, idx) => (
                                <span key={idx} className="cell"></span>
                            ))
                            : content
                                .split("")
                                .map((letter, index) => (
                                    <span key={index} className="cell">{letter}</span>
                                ))
                    }
                </p>
            ))}
        </div>
    );
}