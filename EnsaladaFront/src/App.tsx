import { useState } from 'react'
import HomePage from './pages/HomePage'
import LobbyPage from './pages/LobbyPage'
import GamePage from './pages/GamePage'
import ResultsPage from './pages/ResultsPage'
import { type AppState, type Screen } from './types/screen'

const INITIAL_STATE: AppState = {
  screen: 'home',
  gameId: null,
  playerId: null,
  playerName: null,
}

const App = () => {
  const [appState, setAppState] = useState<AppState>(INITIAL_STATE)

  const navigate = (screen: Screen) => setAppState(prev => ({ ...prev, screen }))

  const onJoinGame = (gameId: string, playerId: string, playerName: string) => setAppState({ screen: 'lobby', gameId, playerId, playerName })
  const onGameStart = () => navigate('game')
  const onEndGame = () => navigate('results')
  const onPlayAgain = () => setAppState(INITIAL_STATE)

  const { screen, gameId, playerId, playerName } = appState

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <HomePage
          onJoinGame={onJoinGame}
        />

      case 'lobby':
        return <LobbyPage
          gameId={gameId!}
          playerId={playerId!}
          playerName={playerName!}
          onGameStart={onGameStart}
        />

      case 'game':
        return <GamePage
          gameId={gameId!}
          playerId={playerId!}
          onEndGame={onEndGame}
        />

      case 'results':
        return <ResultsPage
          gameId={gameId!}
          playerId={playerId!}
          onPlayAgain={onPlayAgain}
        />
    }
  }

  return (
    <div className="app">
      {renderScreen()}
    </div>
  )
}

export default App
