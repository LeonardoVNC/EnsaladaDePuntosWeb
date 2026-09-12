export type GamePhase = 'waiting' | 'playing' | 'finished'

export type VegetableType = 'Pimiento' | 'Lechuga' | 'Cebolla' | 'Zanahoria' | 'Col' | 'Tomate'

export type RecipeFunc =
    { type: 'Count'; vegetable: VegetableType; every: number; points: number } |
    { type: 'Comb2'; v1: VegetableType; v2: VegetableType; points: number } |
    { type: 'Comb3'; v1: VegetableType; v2: VegetableType; v3: VegetableType; points: number } |
    { type: 'Max'; vegetable: VegetableType; points: number } |
    { type: 'Min'; vegetable: VegetableType; points: number } |
    { type: 'OddEven'; vegetable: VegetableType; oddPoints: number; evenPoints: number } |
    { type: 'MaxTotal'; points: number } |
    { type: 'MinTotal'; points: number } |
    { type: 'GroupCount'; startsAt: number; points: number } |
    { type: 'AllVegetables'; points: number } |
    { type: 'NotAllVegetables'; points: number }

export interface Card {
    vegetable: VegetableType
    functions: RecipeFunc[]
}

export interface Column {
    pile: Card[]
    recipe: Card | null
    vegetables: [Card | null, Card | null]
}

export interface PlayerPublic {
    id: string
    name: string
    vegetableCount: number
    recipeCount: number
}

export interface GameState {
    phase: GamePhase
    currentPlayerId: string | null
    players: PlayerPublic[]
    columns: [Column, Column, Column]
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