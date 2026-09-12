import { get, post } from "./httpClient"
import { type GameState, type ScoreResult } from "../types/api"

const BASE = '/api/game'

export const gameService = {
    createRoom(playerName: string) {
        return post<{ gameId: string; playerId: string; phase: string }>(
            `${BASE}`,
            { playerName }
        )
    },

    joinRoom(gameId: string, playerName: string) {
        return post<{ playerId: string; phase: string; playerCount: number }>(
            `${BASE}/${gameId}/join`,
            { playerName }
        )
    },

    startGame(gameId: string, playerId: string) {
        return post<{ phase: string }>(
            `${BASE}/${gameId}/start`,
            { playerId }
        )
    },

    getState(gameId: string) {
        return get<GameState>(`${BASE}/${gameId}/state`)
    },

    playCard(gameId: string, playerId: string, columnIndex: number, rowIndex: number) {
        return post<GameState>(
            `${BASE}/${gameId}/play`,
            { playerId, columnIndex, rowIndex }
        )
    },

    getResults(gameId: string) {
        return get<ScoreResult>(`${BASE}/${gameId}/results`)
    }
}