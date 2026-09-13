import CardView from "./CardView";
import type { TableRow } from '../types/api'
import cardImg from '../assets/fluent--playing-cards-20-regular.svg';

interface ColumnProps {
    column: TableRow
    columnIndex: number
    isMyTurn: boolean
    onCardClick: (columnIndex: number, rowIndex: number) => void
}
function Column({ column, columnIndex, isMyTurn, onCardClick }: ColumnProps) {
    return (
        <>
            <div className="column">
                <div className="pile-count">
                    <img className="column-card-img" src={cardImg} alt="Logo Cartas" />
                    {column.pileSize === 0 ? `Pila sin más cartas` : `${column.pileSize} ${column.pileSize > 1 ? `cartas restantes` : `carta restante`}`}
                </div>
                <CardView
                    card={column.topRecipe}
                    side="recipe"
                    clickable={isMyTurn && column.topRecipe !== null}
                    onClick={() => onCardClick(columnIndex, 0)}
                />

                <div className="pile-vegetable">
                    <CardView
                        key={0}
                        card={column.veg1}
                        side="vegetable"
                        clickable={isMyTurn && column.veg1 !== null}
                        onClick={() => onCardClick(columnIndex, 1)}
                    />
                    <CardView
                        key={1}
                        card={column.veg2}
                        side="vegetable"
                        clickable={isMyTurn && column.veg2 !== null}
                        onClick={() => onCardClick(columnIndex, 2)}
                    />
                </div>
            </div>
        </>
    );
}

export default Column;