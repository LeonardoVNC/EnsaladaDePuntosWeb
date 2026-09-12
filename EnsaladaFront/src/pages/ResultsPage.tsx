interface ResultsPageProps {
    gameId: string,
    playerId: string,
    onPlayAgain: () => void
}

function ResultsPage(props: ResultsPageProps) {
    return (
        <>
            Soy una página de resultados wiwiwiwi
            <br />
            Traigo esta otra info:
            <br />
            GameID: {props.gameId} <br />
            PlayerID: {props.playerId}
            <br />
            <button onClick={() => { props.onPlayAgain() }}>Presioname.</button>
        </>
    );
}

export default ResultsPage;