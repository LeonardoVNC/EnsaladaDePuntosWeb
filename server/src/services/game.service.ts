import { gameRepository } from "../repository/game.repository"
import { GameRoom } from '../types/game'

const makeId = () => Math.random().toString(36).slice(2, 8)

export const gameService = {
    createRoom(playerName: string): { gameId: string; playerId: string; phase: string } {
        const gameId = makeId()
        const playerId = makeId()

        const room: GameRoom = {
            id: gameId,
            phase: 'waiting',
            players: [{
                id: playerId,
                name: playerName,
                vegetablesHand: [],
                recipesHand: []
            }],
            columns: [
                { pile: [], recipe: null, vegetables: [null, null] },
                { pile: [], recipe: null, vegetables: [null, null] },
                { pile: [], recipe: null, vegetables: [null, null] }
            ],
            currentPlayerIndex: 0
        }

        gameRepository.save(room)
        return { gameId, playerId, phase: room.phase }
    },

    joinRoom(gameId: string, playerName: string): { playerId: string; phase: string; playerCount: number } {
        const room = gameRepository.findById(gameId)

        if (!room) throw { status: 404, message: 'Sala no encontrada' }
        if (room.phase !== 'waiting') throw { status: 400, message: 'La partida ya está en curso' }
        if (room.players.length >= 6) throw { status: 400, message: 'La sala está llena' }

        const playerId = makeId()
        room.players.push({
            id: playerId,
            name: playerName,
            vegetablesHand: [],
            recipesHand: []
        })

        gameRepository.save(room)
        return { playerId, phase: room.phase, playerCount: room.players.length }
    },

    startGame(gameId: string, playerId: string): { phase: string } {
        const room = gameRepository.findById(gameId)

        if (!room) throw { status: 404, message: 'Sala no encontrada' }
        if (room.phase !== 'waiting') throw { status: 400, message: 'La partida ya está en curso' }
        if (room.players[0].id !== playerId) throw { status: 403, message: 'Solo el creador puede iniciar la partida' }
        if (room.players.length < 2) throw { status: 400, message: 'Se necesitan al menos 2 jugadores' }

        // TODO: funcion para barajear las cartas y meterlas aca
        room.phase = 'playing'

        gameRepository.save(room)
        return { phase: room.phase }
    },

    getState(gameId: string) {
        const room = gameRepository.findById(gameId)
        if (!room) throw { status: 404, message: 'Sala no encontrada' }

        const players = room.players.map(p => ({
            id: p.id,
            name: p.name,
            vegetableCount: p.vegetablesHand.length,
            recipeCount: p.recipesHand.length
        }))

        return {
            phase: room.phase,
            currentPlayerId: room.players[room.currentPlayerIndex]?.id ?? null,
            players,
            columns: room.columns
        }
    }
}