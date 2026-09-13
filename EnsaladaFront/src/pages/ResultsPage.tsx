import { useEffect, useState } from 'react'
import { gameService } from '../service/game.service'
import type { ScoreResult, VegetableType } from '../types/api'
import { VEGETABLE_SRC } from '../constants/vegetables'

interface ResultsPageProps {
    gameId: string,
    playerId: string,
    onPlayAgain: () => void
}

function ResultsPage({ gameId, playerId, onPlayAgain }: ResultsPageProps) {
    const [results, setResults] = useState<ScoreResult | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        gameService.getResults(gameId)
            .then(setResults)
            .catch(err => setError(err instanceof Error ? err.message : 'Error al cargar resultados'))
    }, [gameId])

    if (error) return (
        <div className="results-screen">
            <div className="results-card">
                <p className="error-message">{error}</p>
                <button onClick={onPlayAgain}>Volver al inicio</button>
            </div>
        </div>
    )

    if (!results) return (
        <div className="results-screen">
            <div className="results-card">
                <p className="loading-text">Calculando puntajes...</p>
            </div>
        </div>
    )

    const winner = results.scores.find(s => results.winners.includes(s.playerId))
    const isWinner = results.winners.includes(playerId)
    const isTie = results.winners.length > 1

    return (
        <div className="results-screen">
            <div className="results-card">
                <div className="results-header">
                    <h2 className="results-title">
                        {isTie
                            ? '¡Empate!'
                            : isWinner
                                ? '¡Ganaste!'
                                : `Ganó ${winner?.playerName}`
                        }
                    </h2>
                </div>

                <div className="scores-list">
                    {results.scores
                        .sort((a, b) => b.total - a.total)
                        .map((score, i) => (
                            <div
                                key={score.playerId}
                                className={[
                                    'score-row',
                                    results.winners.includes(score.playerId) ? 'winner' : '',
                                    score.playerId === playerId ? 'me' : ''
                                ].join(' ')}
                            >
                                <span className="score-rank">#{i + 1}</span>
                                <span className="score-name">
                                    {score.playerName}
                                    {score.playerId === playerId ? ' (tú)' : ''}
                                </span>
                                <span className="score-total">{score.total} pts</span>

                                <div className="score-vegetables">
                                    {(Object.entries(score.vegetables) as [VegetableType, number][])
                                        .filter(([, count]) => count > 0)
                                        .map(([veg, count]) => (
                                            <span key={veg} className="veg-chip">
                                                <img
                                                    src={VEGETABLE_SRC[veg]}
                                                    alt={veg}
                                                    className="veg-chip-img"
                                                />
                                                ×{count}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <button onClick={onPlayAgain}>Jugar de nuevo</button>
            </div>
        </div>
    )
}

export default ResultsPage;