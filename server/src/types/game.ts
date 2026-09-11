import { Card } from "./cards";

export interface Column {
    pile: Card[];
    recipe: Card | null;
    vegetables: [Card | null, Card | null];
}

export interface Player {
    id: string;
    name: string;
    vegetablesHand: Card[]
    recipesHand: Card[]
}

export type GamePhase = 'waiting' | 'playing' | 'finished'

export interface GameRoom {
    id: string;
    phase: GamePhase;
    players: Player[];
    columns: [Column, Column, Column];
    currentPlayerIndex: number
}