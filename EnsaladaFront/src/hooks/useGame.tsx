import { useEffect, useRef, useState } from 'react'
import { gameService } from '../service/game.service'
import { type GameState } from '../types/api'

interface UseGameOptions {
    gameId: string
    enabled: boolean
    intervalMs?: number
    onPhaseChange?: (phase: GameState['phase']) => void
}

export const useGame = ({ gameId, enabled, intervalMs = 2000, onPhaseChange }: UseGameOptions) => {
    const [state, setState] = useState<GameState | null>(null)
    const [error, setError] = useState<string | null>(null)
    const lastPhaseRef = useRef<string | null>(null)

    useEffect(() => {
        if (!enabled) return

        const update = async () => {
            try {
                const data = await gameService.getState(gameId)
                setState(data)
                setError(null)

                if (onPhaseChange && data.phase !== lastPhaseRef.current) {
                    lastPhaseRef.current = data.phase
                    onPhaseChange(data.phase)
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error de conexión')
            }
        }

        update()
        const interval = setInterval(update, intervalMs)
        return () => clearInterval(interval)

    }, [gameId, enabled, intervalMs])

    return { state, error }
}