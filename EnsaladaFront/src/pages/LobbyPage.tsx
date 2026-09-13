import { useState } from "react";
import { useGame } from "../hooks/useGame";
import { gameService } from "../service/game.service";

interface LobbyPageProps {
    gameId: string,
    playerId: string,
    playerName: string,
    onGameStart: () => void
}

function LobbyPage({ gameId, playerId, onGameStart }: LobbyPageProps) {
    const [lobbyError, setLobbyError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)


    const { state, error } = useGame({
        gameId,
        enabled: true,
        onPhaseChange: (phase) => {
            if (phase === 'playing') onGameStart()
        }
    })

    const isCreator = state?.players[0]?.id === playerId
    const canStart = (state?.players.length ?? 0) >= 2

    const handleStart = async () => {
        setLoading(true)
        setLobbyError(null)
        try {
            await gameService.startGame(gameId, playerId)
        } catch (err) {
            setLobbyError(err instanceof Error ? err.message : 'Error al iniciar')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="lobby-screen">
                <div className="lobby-card">
                    <h2 className="lobby-title">Sala de espera</h2>

                    <div className="room-code-box">
                        <p className="room-code-label">Código de la sala</p>
                        <p className="room-code">{gameId}</p>
                        <p className="room-code-hint">Comparte este código con tus amigos</p>
                    </div>

                    <div className="players-list">
                        <p className="players-title">
                            Jugadores: ({state?.players.length ?? 0}/6)
                        </p>
                        {state?.players.map((player, i) => (
                            <div key={player.id} className="player-row">
                                <span className="player-name">
                                    {player.name}
                                    {player.id === playerId ? ' (tú)' : ''}
                                </span>
                                {i === 0 && <span className="creator-badge">Anfitrión</span>}
                            </div>
                        ))}
                        {!state && <p className="loading-text">Conectando...</p>}
                    </div>

                    {isCreator ? (
                        <div className="start-section">
                            {!canStart && (
                                <p className="waiting-hint">
                                    Esperando al menos un jugador más...
                                </p>
                            )}
                            <button
                                onClick={handleStart}
                                disabled={!canStart || loading}
                            >
                                {loading ? 'Iniciando...' : 'Iniciar partida'}
                            </button>
                        </div>
                    ) : (
                        <p className="waiting-hint">
                            Esperando que el anfitrión inicie la partida...
                        </p>
                    )}

                    {(error || lobbyError) && (
                        <p className="error-message">{error ?? lobbyError}</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default LobbyPage;