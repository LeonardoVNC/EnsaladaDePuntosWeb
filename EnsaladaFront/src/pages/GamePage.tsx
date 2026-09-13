import { useState } from "react";
import type { GameState } from "../types/api";
import { useGame } from "../hooks/useGame";
import PlayerInfo from "../components/PlayerInfo";
import Board from "../components/Board";
import logoBorder from '../assets/pagelogo.svg';
import logoFill from '../assets/pagelogo.png';

interface GamePageProps {
    gameId: string,
    playerId: string,
    onEndGame: () => void
}

function GamePage({ gameId, playerId, onEndGame }: GamePageProps) {
    const [error, setError] = useState<string | null>(null)
    const [lastState, setLastState] = useState<GameState | null>(null)

    const { state, error: gameError } = useGame({
        gameId,
        enabled: true,
        onPhaseChange: (phase) => {
            if (phase === 'finished') onEndGame()
        }
    })

    const gameState = state ?? lastState
    if (state && state !== lastState) setLastState(state)

    const isMyTurn = gameState?.currentPlayerId === playerId

    const handleError = (msg: string) => {
        setError(msg)
        setTimeout(() => setError(null), 3000)
    }

    if (!gameState) return <div className="loading-screen">Cargando partida...</div>

    return (
        <>
            <div className="game-screen">
                <PlayerInfo
                    players={gameState.players}
                    currentPlayerId={gameState.currentPlayerId}
                    myPlayerId={playerId}
                />

                <div className="turn-banner">
                    {isMyTurn
                        ? <img className="turn-img" src={logoFill} alt="TuTurno"/>
                        : <img className="turn-img" src={logoBorder} alt="OtroTurno"/>
                    }
                    {isMyTurn
                        ? 'Es tu turno - Elige una carta'
                        : `Turno de ${gameState.players.find(p => p.id === gameState.currentPlayerId)?.name ?? '...'}`
                    }
                </div>

                <Board
                    table={gameState.table}
                    gameId={gameId}
                    playerId={playerId}
                    isMyTurn={isMyTurn}
                    onError={handleError}
                />

                {(error || gameError) && (
                    <div className="error-toast">{error ?? gameError}</div>
                )}
            </div>
        </>
    );
}

export default GamePage;