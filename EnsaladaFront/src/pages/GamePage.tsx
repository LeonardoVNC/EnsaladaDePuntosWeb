interface GamePageProps {
    gameId: string,
    playerId: string,
    onEndGame: () => void
}

function GamePage(props: GamePageProps) {
    return (
        <>
            Soy una página de juegos wiwiwiwi
            <br />
            Traigo esta otra info:
            <br />
            GameID: {props.gameId} <br />
            PlayerID: {props.playerId} 
            <br />
            <button onClick={() => { props.onEndGame() }}>Presioname.</button>
        </>
    );
}

export default GamePage;