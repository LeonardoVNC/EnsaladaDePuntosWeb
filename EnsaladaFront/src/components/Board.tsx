import { type TableRow } from '../types/api'
import { gameService } from '../service/game.service'
import Column from './Column'

interface BoardProps {
    table: [TableRow, TableRow, TableRow]
    gameId: string
    playerId: string
    isMyTurn: boolean
    onError: (msg: string) => void
}

function Board({ table, gameId, playerId, isMyTurn, onError }: BoardProps) {
    const handleCardClick = async (columnIndex: number, rowIndex: number) => {
        if (!isMyTurn) { onError('No es tu turno'); return }
        try {
            await gameService.playCard(gameId, playerId, columnIndex, rowIndex)
        } catch (err) {
            onError(err instanceof Error ? err.message : 'Jugada inválida')
        }
    }

    return (
        <>
            <div className="board">
                {table && table.map((column, colIdx) => (
                    <Column
                        key={colIdx}
                        column={column}
                        columnIndex={colIdx}
                        isMyTurn={isMyTurn}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>
        </>
    );
}

export default Board;