export function GuessList({userGuess}) {
    return <div className="guess-results">
        {userGuess.map(({id, content}) => (
            <p key={id} className="guess">
                {content}
            </p>
        ))}
        {/*<p className="guess">FIRST</p>*/}
        {/*<p className="guess">GUESS</p>*/}
    </div>;
}