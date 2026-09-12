interface LobbyPageProps {
    gameId: string,
    playerId: string,
    playerName: string,
    onGameStart: () => void
}

function LobbyPage(props: LobbyPageProps) {
    return (
        <>
            Soy una página de espera wiwiwiwi
            <br />
            Tengo esta info:
            <br />
            GameID: {props.gameId}<br />
            PlayerID: {props.playerId}<br />
            El peji: {props.playerName}
            <br />

            <button onClick={() => { props.onGameStart() }}>Presioname.</button>
        </>
    );
}

export default LobbyPage;