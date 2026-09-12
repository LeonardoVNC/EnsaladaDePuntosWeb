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
        const veg1 = pile.shift() ?? null
        const veg2 = pile.shift() ?? null
        return {
            pile,
            recipe,
            vegetables: [veg1, veg2]
        }
    }) as [Column, Column, Column]
}

const activePiles = (columns: [Column, Column, Column]): number => {
    const active = columns.filter(col =>
        col.recipe !== null ||
        col.vegetables[0] !== null ||
        col.vegetables[1] !== null ||
        col.pile.length > 0
    ).length
    return active
}

const checkGameOver = (room: GameRoom): boolean => activePiles(room.columns) <= 1

const nextTurn = (room: GameRoom): void => {
    room.currentPlayerIndex = (room.currentPlayerIndex + 1) % room.players.length
}

const takeVegetable = (room: GameRoom, columnIndex: number, slot: 0 | 1): Card => {
    const column = room.columns[columnIndex]
    const card = column.vegetables[slot]

    if (!card) throw { status: 400, message: 'No hay verdura en ese slot' }

    if (column.recipe) {
        column.vegetables[slot] = column.recipe
        column.recipe = column.pile.shift() ?? null
    } else {
        column.vegetables[slot] = null
    }

    return card
}

const takeRecipe = (room: GameRoom, columnIndex: number): Card => {
    const column = room.columns[columnIndex]
    const card = column.recipe

    if (!card) throw { status: 400, message: 'No hay receta disponible en esa columna' }

    column.recipe = column.pile.shift() ?? null

    return card
}

export const processPlay = (room: GameRoom, playerId: string, columnIndex: number, rowIndex: number): void => {
    const player = room.players.find(p => p.id === playerId)
    if (!player) throw { status: 404, message: 'Jugador no encontrado' }

    let card: Card

    if (rowIndex === 0) {
        card = takeRecipe(room, columnIndex)
        player.recipesHand.push(card)
    } else {
        const slot = (rowIndex - 1) as 0 | 1
        card = takeVegetable(room, columnIndex, slot)
        player.vegetablesHand.push(card)
    }

    if (checkGameOver(room)) {
        room.phase = 'finished'
    } else {
        nextTurn(room)
    }
}