export type Screen = 'home' | 'lobby' | 'game' | 'results'

export interface AppState {
    screen: Screen
    gameId: string | null
    playerId: string | null
    playerName: string | null
}