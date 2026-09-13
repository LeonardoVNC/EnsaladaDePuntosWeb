import { useState } from "react";
import { gameService } from "../service/game.service";
import logo from '../assets/logo.png';

interface HomePageProps {
    onJoinGame: (gameId: string, playerId: string, playerName: string) => void
}

function HomePage(props: HomePageProps) {
    const [playerName, setPlayerName] = useState<string>('')
    const [joinCode, setJoinCode] = useState<string>('')

    const [mode, setMode] = useState<'create' | 'join' | null>(null)

    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleCreate = async () => {
        if (!playerName.trim()) {
            setError('Ingresa tu nombre');
            return
        }

        setLoading(true)
        setError(null)

        try {
            const res = await gameService.createRoom(playerName.trim())
            props.onJoinGame(res.gameId, res.playerId, playerName.trim())
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al crear la sala')
        } finally {
            setLoading(false)
        }
    }

    const handleJoin = async () => {
        if (!playerName.trim()) {
            setError('Ingresa tu nombre');
            return
        }
        if (!joinCode.trim()) {
            setError('Ingresa el código de sala')
            return
        }

        setLoading(true)
        setError(null)

        try {
            const res = await gameService.joinRoom(joinCode.trim(), playerName.trim())
            props.onJoinGame(joinCode.trim(), res.playerId, playerName.trim())
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al unirse a la sala')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="home-screen">
                <div className="home-card">
                    <img className="home-img" src={logo} alt="Logo del juego"/>
                    <p className="home-subtitle">Combina las verduras con las mejores cartas de puntuación y consigue la mejor ensalada!</p>

                    <div className="name-input-group">
                        <label htmlFor="playerName">Tu nombre:</label>
                        <input
                            id="playerName"
                            type="text"
                            placeholder="Ej: Patricio"
                            value={playerName}
                            onChange={e => setPlayerName(e.target.value)}
                            maxLength={20}
                        />
                    </div>

                    {mode === null && (
                        <div className="mode-buttons">
                            <button onClick={() => setMode('create')}>
                                Crear sala
                            </button>
                            <button onClick={() => setMode('join')} className="secondary">
                                Unirse a sala
                            </button>
                        </div>
                    )}

                    {mode === 'create' && (
                        <div className="action-group">
                            <p className="action-hint">Se creará una sala y recibirás un código para compartir con tus amiguitos</p>
                            <div className="action-buttons">
                                <button onClick={handleCreate} disabled={loading}>
                                    {loading ? 'Creando...' : 'Crear sala'}
                                </button>
                                <button onClick={() => { setMode(null); setError(null) }} className="secondary">
                                    Volver
                                </button>
                            </div>
                        </div>
                    )}

                    {mode === 'join' && (
                        <div className="action-group">
                            <label htmlFor="joinCode">Código de sala:</label>
                            <input
                                id="joinCode"
                                type="text"
                                placeholder="Ej: abc123"
                                value={joinCode}
                                onChange={e => setJoinCode(e.target.value)}
                                maxLength={10}
                            />
                            <div className="action-buttons">
                                <button onClick={handleJoin} disabled={loading}>
                                    {loading ? 'Uniéndose...' : 'Unirse'}
                                </button>
                                <button onClick={() => { setMode(null); setError(null) }} className="secondary">
                                    Volver
                                </button>
                            </div>
                        </div>
                    )}

                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </>
    );
}

export default HomePage;