import CardView from "./CardView";
import type { TableRow } from '../types/api'

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
                <div className="row-label">Receta wiwiwi</div>
                <CardView
                    card={column.topRecipe}
                    side="recipe"
                    clickable={isMyTurn && column.topRecipe !== null}
                    onClick={() => onCardClick(columnIndex, 0)}
                />

                <div className="pile-count">
                    📦 {column.pileSize} cartas
                </div>

                <div className="row-label">Verduras</div>
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
        </>
    );
}

export default Column;