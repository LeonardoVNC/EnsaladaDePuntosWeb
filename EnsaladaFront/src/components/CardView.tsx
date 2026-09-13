import type { Card, RecipeFunc, VegetableType } from '../types/api'
import type { ReactElement } from 'react';
import tomate from '../assets/Tomate.png';
import zanahoria from '../assets/Zanahoria.png';
import col from '../assets/Col.png';
import lechuga from '../assets/Lechuga.png';
import pimiento from '../assets/Pimiento.png';
import cebolla from '../assets/Cebolla.png';

interface CardViewProps {
    card: Card | null
    side: 'recipe' | 'vegetable'
    clickable: boolean
    onClick: () => void
}

const VEGETABLE_COLOR: Record<VegetableType, string> = {
    Tomate: '#c83e18',
    Zanahoria: '#f88126',
    Col: '#7e1086',
    Lechuga: '#45ac3f',
    Pimiento: '#e9bf35',
    Cebolla: '#db39ad'
}

const VEGETABLE_IMG: Record<VegetableType, ReactElement> = {
    Tomate: <img className="card-img" src={tomate} alt="LogoTomate" />,
    Zanahoria: <img className="card-img" src={zanahoria} alt="LogoZanahoria" />,
    Col: <img className="card-img" src={col} alt="LogoCol" />,
    Lechuga: <img className="card-img" src={lechuga} alt="LogoLechuga" />,
    Pimiento: <img className="card-img" src={pimiento} alt="LogoPimiento" />,
    Cebolla: <img className="card-img" src={cebolla} alt="LogoCebolla" />
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
    const bgColor = VEGETABLE_COLOR[card.vegetable]
    const img = VEGETABLE_IMG[card.vegetable]

    if (side === 'vegetable') {
        return (
            <div
                className={`card card-vegetable ${clickable ? 'clickable' : ''}`}
                style={{ background: bgColor, borderColor: bgColor }}
                onClick={clickable ? onClick : undefined}
            >
                <div className="card-corner top-right">
                    {img}
                </div>
                <span className="card-name">{card.vegetable.toUpperCase()}</span>
                <div className="card-vegetable-bg">
                    {img}
                </div>
                <span className="card-name rotated">{card.vegetable.toUpperCase()}</span>
                <div className="card-corner bottom-left">
                    {img}
                </div>
            </div>
        )
    }

    return (
        <div
            className={`card card-recipe ${clickable ? 'clickable' : ''}`}
            onClick={clickable ? onClick : undefined}
        >
            <span
                className="card-vegetable-tag"
                style={{ background: bgColor, borderColor: bgColor }}
            >
                {VEGETABLE_IMG[card.vegetable]} {card.vegetable}
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