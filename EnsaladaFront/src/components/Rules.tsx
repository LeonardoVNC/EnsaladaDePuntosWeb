interface RulesProps {
    visible: boolean,
    onClose: () => void
}

function Rules({ visible, onClose }: RulesProps) {
    return (
        <>
            {visible && (
                <div className="modal-overlay" onClick={onClose}>
                    <div className="modal-card" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>¿Cómo jugar?</h2>
                            <button className="modal-close" onClick={onClose}>✕</button>
                        </div>
                        <div className="modal-body">
                            <div className="instructions-section">
                                <h3>Objetivo</h3>
                                <p>Acumular la mayor cantidad de puntos tomando cartas verdura y receta del tablero.</p>
                            </div>
                            <div className="instructions-section">
                                <h3>El tablero</h3>
                                <p>Hay 3 columnas. Cada una muestra una <strong>receta</strong> arriba y dos <strong>verduras</strong> abajo. Además, se muestra un contador de cartas restantes en el montón.</p>
                            </div>
                            <div className="instructions-section">
                                <h3>Tipos de Cartas</h3>
                                <p>Las cartas tomadas corresponden a 2 Categorías:</p>
                                <ul>
                                    <li><strong>Receta:</strong> Cuentan con 2 características importantes, una verdura en la parte superior que representa qué verdura se encuentra al otro lado de la Receta, y un conjunto de Funciones que indican cómo se sumaran puntos con esta receta.</li>
                                    <li><strong>Verdura:</strong> Son las cartas necesarias para sumar puntos con las recetas, las Verduras nos ayudan a formar varias Recetas y no son excluyentes, es decir, que si usaste un Tomate en una Receta A, puedes usar ese mismo Tomate en una Receta B y recibir la puntuación de ambas Recetas.</li>
                                </ul>
                            </div>
                            <div className="instructions-section">
                                <h3>Tu turno</h3>
                                <p>Elige <strong>una</strong> de las 9 cartas visibles:</p>
                                <ul>
                                    <li><strong>Tomar una verdura</strong> - la receta de esa columna se voltea y la reemplaza.</li>
                                    <li><strong>Tomar una receta</strong> - la siguiente carta del montón pasa a ser la nueva receta.</li>
                                </ul>
                            </div>
                            <div className="instructions-section">
                                <h3>Fin de la partida</h3>
                                <p>Una vez se hayan vacíado por completo 2 de las 3 columnas de cartas en el tablero, se da por terminado el juego y se procede a contar los puntos. La puntuación de cada jugador se calculará en base a las verduras y recetas que haya recolectado. </p>
                                <p>El jugador con el puntaje más alto se declara como ganador de la partida. </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Rules;