import { GameRoom, Column } from '../types/game'
import { Card } from '../types/cards'
import { buildDeck } from './deck'

export const initGame = (room: GameRoom): void => {
    const deck = buildDeck()
    console.log(deck.length)

    const piles: [Card[], Card[], Card[]] = [
        deck.slice(0, 36),
        deck.slice(36, 72),
        deck.slice(72, 108)
    ]

    room.columns = piles.map((pile): Column => {
        const recipe = pile.shift() ?? null
        const veg1   = pile.shift() ?? null
        const veg2   = pile.shift() ?? null
        return {
            pile,
            recipe,
            vegetables: [veg1, veg2]
        }
    }) as [Column, Column, Column]
}