import type { Card, RecipeFunc, VegetableType } from '../types/api'

interface CardViewProps {
    card: Card | null
    side: 'recipe' | 'vegetable'
    clickable: boolean
    onClick: () => void
}

// TODO: Reemplazar por imágenes luego quizá, de nuevo si tengo tiempo
const VEGETABLE_EMOJI: Record<VegetableType, string> = {
    Tomate: '🍅',
    Zanahoria: '🥕',
    Col: '🥬',
    Lechuga: '🥗',
    Pimiento: '🫑',
    Cebolla: '🧅'
}
const describeFunc = (func: RecipeFunc): string => {
    switch (func.type) {
        case 'Count': return `Por cada ${func.every} ${func.vegetable}: ${func.points > 0 ? '+' : ''}${func.points} pts`
        case 'Comb2': return `Par ${func.v1}+${func.v2}: +${func.points} pts`
        case 'Comb3': return `Trío ${func.v1}+${func.v2}+${func.v3}: +${func.points} pts`
        case 'Max': return `Más ${func.vegetable}: +${func.points} pts`
        case 'Min': return `Menos ${func.vegetable}: +${func.points} pts`
        case 'OddEven': return `${func.vegetable} par: +${func.evenPoints}, impar: +${func.oddPoints} pts`
        case 'MaxTotal': return `Más verduras en total: +${func.points} pts`
        case 'MinTotal': return `Menos verduras en total: +${func.points} pts`
        case 'GroupCount': return `Por verdura con ≥${func.startsAt}: +${func.points} pts`
        case 'AllVegetables': return `Una de cada: +${func.points} pts`
        case 'NotAllVegetables': return `Por verdura ausente: +${func.points} pts`
    }
}

function CardView({ card, side, clickable, onClick }: CardViewProps) {
    if (!card) return <div className="card card-empty">—</div>

    if (side === 'vegetable') {
        return (
            <div
                className={`card card-vegetable ${clickable ? 'clickable' : ''}`}
                onClick={clickable ? onClick : undefined}
            >
                <span className="card-emoji">{VEGETABLE_EMOJI[card.vegetable]}</span>
                <span className="card-name">{card.vegetable}</span>
            </div>
        )
    }

    return (
        <div
            className={`card card-recipe ${clickable ? 'clickable' : ''}`}
            onClick={clickable ? onClick : undefined}
        >
            <span className="card-vegetable-tag">
                {VEGETABLE_EMOJI[card.vegetable]} {card.vegetable}
            </span>
            <ul className="card-functions">
                {card.functions.map((func, i) => (
                    <li key={i}>{describeFunc(func)}</li>
                ))}
            </ul>
        </div>
    )
}

export default CardView;