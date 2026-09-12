import { GameRoom } from '../types/game'
import { Card, VegetableType, RecipeFunc } from '../types/cards'

const VEGETABLES: VegetableType[] = ['Pimiento', 'Lechuga', 'Cebolla', 'Zanahoria', 'Col', 'Tomate']

const countVegetables = (hand: Card[]): Record<VegetableType, number> => {
    const counts = Object.fromEntries(VEGETABLES.map(v => [v, 0])) as Record<VegetableType, number>
    for (const card of hand) {
        counts[card.vegetable]++
    }
    return counts
}

const evaluateRecipe = (
    func: RecipeFunc,
    counts: Record<VegetableType, number>,
    allCounts: Record<VegetableType, number>[],
    totalVegetables: number,
    allTotals: number[]
): number => {
    switch (func.type) {
        case 'Count': {
            const amount = counts[func.vegetable]
            return Math.floor(amount / func.every) * func.points
        }
        case 'Comb2': {
            const pairs = Math.min(counts[func.v1], counts[func.v2])
            return pairs * func.points
        }
        case 'Comb3': {
            const trios = Math.min(counts[func.v1], counts[func.v2], counts[func.v3])
            return trios * func.points
        }
        case 'Max': {
            const myAmount = counts[func.vegetable]
            const maxAmount = Math.max(...allCounts.map(c => c[func.vegetable]))
            return myAmount === maxAmount ? func.points : 0
        }
        case 'Min': {
            const myAmount = counts[func.vegetable]
            const minAmount = Math.min(...allCounts.map(c => c[func.vegetable]))
            return myAmount === minAmount ? func.points : 0
        }
        case 'OddEven': {
            const amount = counts[func.vegetable]
            return amount % 2 === 0 ? func.evenPoints : func.oddPoints
        }
        case 'MaxTotal': {
            const maxTotal = Math.max(...allTotals)
            return totalVegetables === maxTotal ? func.points : 0
        }
        case 'MinTotal': {
            const minTotal = Math.min(...allTotals)
            return totalVegetables === minTotal ? func.points : 0
        }
        case 'GroupCount': {
            return VEGETABLES
                .filter(v => counts[v] >= func.startsAt)
                .length * func.points
        }
        case 'AllVegetables': {
            const hasAll = VEGETABLES.every(v => counts[v] > 0)
            return hasAll ? func.points : 0
        }
        case 'NotAllVegetables': {
            const missing = VEGETABLES.filter(v => counts[v] === 0).length
            return missing * func.points
        }
    }
}

export interface PlayerScore {
    playerId: string
    playerName: string
    total: number
    points: number[]
    vegetables: Record<VegetableType, number>
}

export interface ScoreResult {
    winners: string[]
    scores: PlayerScore[]
}

export const calculateScores = (room: GameRoom): ScoreResult => {
    const allCounts = room.players.map(p => countVegetables(p.vegetablesHand))
    const allTotals = room.players.map(p => p.vegetablesHand.length)

    const scores: PlayerScore[] = room.players.map((player, i) => {
        const counts = allCounts[i]
        const total = allTotals[i]

        const points: number[] = player.recipesHand.flatMap(card =>
            card.functions.map(func =>
                evaluateRecipe(func, counts, allCounts, total, allTotals)
            )
        )

        return {
            playerId: player.id,
            playerName: player.name,
            total: points.reduce((sum, p) => sum + p, 0),
            points,
            vegetables: counts
        }
    })

    const maxScore = Math.max(...scores.map(s => s.total))
    const winners = scores
        .filter(s => s.total === maxScore)
        .map(s => s.playerId)

    return { winners, scores }
}