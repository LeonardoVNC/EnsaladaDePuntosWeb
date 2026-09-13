import type { PlayerPublic } from "../types/api";

interface PlayerInfoProps {
    players: PlayerPublic[]
    currentPlayerId: string | null
    myPlayerId: string
}

function PlayerInfo({ players, currentPlayerId, myPlayerId }: PlayerInfoProps) {
    return (
        <>
            <div className="player-info-bar">
                {players.map(player => (
                    <div
                        key={player.id}
                        className={[
                            'player-chip',
                            player.id === currentPlayerId ? 'active' : '',
                            player.id === myPlayerId ? 'me' : ''
                        ].join(' ')}
                    >
                        <span className="chip-name">
                            {player.name}{player.id === myPlayerId ? ' (tú)' : ''}
                        </span>
                        <span className="chip-counts">
                            {/* TODO: Quizá hacer que el contador sea por tipo de verdura en lugar de verduras a secas sería más útil y genial, si da tiempo lo hago xd */}
                            Vegetales: {player.vegetableCount} - Recetas: {player.recipeCount}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PlayerInfo;