import { GameRoom } from '../types/game'

const rooms = new Map<string, GameRoom>()

export const gameRepository = {
    findById(id: string): GameRoom | undefined {
        return rooms.get(id)
    },

    save(room: GameRoom): void {
        rooms.set(room.id, room)
    },

    delete(id: string): void {
        rooms.delete(id)
    }
}