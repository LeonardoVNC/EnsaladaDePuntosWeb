import { Card } from '../types/cards'
import { ALL_CARDS } from '../constants/cards';

export const buildDeck = (): Card[] => {
    const deck = [...ALL_CARDS]
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
    return deck
}