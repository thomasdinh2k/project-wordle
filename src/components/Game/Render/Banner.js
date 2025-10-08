export default function Banner({gameState, userTurn, correctAnswer}) {
    if (gameState === 'win') {
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in {' '}
                    <strong>{userTurn} guesses</strong>.
                </p>
            </div>
        )
    } else {
        return <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
        </div>
    }
}