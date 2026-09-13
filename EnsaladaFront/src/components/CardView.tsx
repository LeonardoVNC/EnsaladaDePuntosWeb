import type { Card, RecipeFunc, VegetableType } from '../types/api'
import type { ReactElement } from 'react';
import { images, VEGETABLE_SRC, VEGETABLE_COLOR } from '../constants/vegetables';

interface CardViewProps {
    card: Card | null
    side: 'recipe' | 'vegetable'
    clickable: boolean
    onClick: () => void
}

const VEGETABLE_IMG: Record<VegetableType, ReactElement> = {
    Tomate: <img className="card-img" src={images.tomate} alt="Tomate" />,
    Zanahoria: <img className="card-img" src={images.zanahoria} alt="Zanahoria" />,
    Col: <img className="card-img" src={images.col} alt="Col" />,
    Lechuga: <img className="card-img" src={images.lechuga} alt="Lechuga" />,
    Pimiento: <img className="card-img" src={images.pimiento} alt="Pimiento" />,
    Cebolla: <img className="card-img" src={images.cebolla} alt="Cebolla" />
}

const VImg = ({ v }: { v: VegetableType }) => (<img src={VEGETABLE_SRC[v]} alt={v} className="recipe-veg-inline" />)
const pts = (n: number) => `${n > 0 ? '+' : ''}${n} pts`

const describeFunc = (func: RecipeFunc): ReactElement => {
    switch (func.type) {
        case 'Count':
            return <><span>Por cada {func.every > 1 ? `${func.every}x` : ''}</span><VImg v={func.vegetable} /><span>: {pts(func.points)}</span></>
        case 'Comb2':
            return <><span>Par </span><VImg v={func.v1} /><span>+</span><VImg v={func.v2} /><span>: {pts(func.points)}</span></>
        case 'Comb3':
            return <><span>Trío </span><VImg v={func.v1} /><span>+</span><VImg v={func.v2} /><span>+</span><VImg v={func.v3} /><span>: {pts(func.points)}</span></>
        case 'Max':
            return <><span>Más </span><VImg v={func.vegetable} /><span>: {pts(func.points)}</span></>
        case 'Min':
            return <><span>Menos </span><VImg v={func.vegetable} /><span>: {pts(func.points)}</span></>
        case 'OddEven':
            return <><VImg v={func.vegetable} /><span> Par: {pts(func.evenPoints)}, Impar: {pts(func.oddPoints)}</span></>
        case 'MaxTotal':
            return <><span>Más verduras en total: {pts(func.points)}</span></>
        case 'MinTotal':
            return <><span>Menos verduras en total: {pts(func.points)}</span></>
        case 'GroupCount':
            return <><span>Por verdura con ≥{func.startsAt}: {pts(func.points)}</span></>
        case 'AllVegetables':
            return <><span>Una de cada: {pts(func.points)}</span></>
        case 'NotAllVegetables':
            return <><span>Por verdura ausente: {pts(func.points)}</span></>
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
                <div className="card-corner top-right">{img}</div>
                <span className="card-name">{card.vegetable.toUpperCase()}</span>
                <div className="card-vegetable-bg">{img}</div>
                <span className="card-name rotated">{card.vegetable.toUpperCase()}</span>
                <div className="card-corner bottom-left">{img}</div>
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
                {img} {card.vegetable}
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