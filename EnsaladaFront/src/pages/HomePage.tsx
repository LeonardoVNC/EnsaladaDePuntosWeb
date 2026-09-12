interface HomePageProps {
    onJoinGame: (gameId: string, playerId: string, playerName: string) => void
}

function HomePage(props: HomePageProps) {
    return (
        <>
            Soy una página principal wiwiwiwi
            <br />
            <button onClick={() => { props.onJoinGame('a', 'b', 'Benjamin') }}>Presioname.</button>
        </>
    );
}

export default HomePage;