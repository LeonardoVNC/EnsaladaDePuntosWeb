# Reglas - Ensalada de Puntos
## Idea del Juego
En Ensalada de Puntos los jugadores deben escoger cartas y, con ellas, formar su propio expositor con el que intentarán obtener puntos al final de la partida. Por turnos, irán formando una saludable ensalada de verduras y seleccionando las mejores cartas de puntuación para su ensalada.

El juego requiere de 2 jugadores como mínimo y 6 jugadores como máximo.

## Preparación
1. Un jugador crea una sala y comparte el código con los demás.
2. Los demás jugadores ingresan el código para unirse.
3. El creador de la sala inicia la partida cuando todos estén listos.
4. El sistema genera y mezcla la baraja de 108 cartas, la divide en 3 montones iguales de 36 cartas, y voltea las 2 primeras cartas de cada montón, dejando visibles 3 recetas y 6 verduras en el tablero.

## Tablero
El tablero tiene 3 columnas. Cada columna muestra:
- Una carta receta visible en la parte superior (lado receta del tope del montón)
- Dos cartas verdura visibles debajo (primeras cartas volteadas del montón)
- El contador de cartas restantes en el montón

## ¿Cómo se juega?
En tu turno tienes que tomar una carta de las 9 disponibles en el tablero para agregarla a tu mano. El objetivo es juntar cartas para sumar la mayor cantidad de puntos al final de la partida.

Las cartas tomadas corresponden a 2 Categorías:
- **Receta:** Estas cartas se encuentran en la parte superior del tablero, encabezando la pila de cartas. Cuentan con 2 características importantes, una verdura en la parte superior que representa qué verdura se encuentra al otro lado de la Receta, y un conjunto de Funciones que indican cómo se sumaran puntos con esta receta. Las formas de sumar puntos van desde puntos por cada verdura de cierto tipo en tu mano, pasando por puntuaciones altas obtenidas por lograr juntar varios tipos de verduras en una única receta, hasta bonus por tener la mayor cantidad de verduras.
- **Verdura:** Son las cartas necesarias para sumar puntos con las recetas, pueden verse como su entrada, las Verduras nos ayudan a formar varias Recetas y no son excluyentes, es decir, que si usaste un Tomate en una Receta A, puedes usar ese mismo Tomate en una Receta B y recibir la puntuación de ambas Recetas.

Al tomar una carta de Verdura, se toma el tope de la pila de la columna de la que se sacó la Verdura y se da vuelta a la Receta para revelar su lado de Verdura y cubrir el puesto de la tarjeta que se acaba de tomar. Una vez hecho esto, se pasa el turno al siguiente jugador. 

## Fin de Juego
Una vez se hayan vacíado por completo 2 de las 3 columnas de cartas en el tablero, se da por terminado el juego y se procede a contar los puntos. La puntuación de cada jugador se calculará en base a todas sus verduras disponibles, separandolas por el tipo de verdura que tenga, y a las recetas que haya recolectado. 

En caso de recetas especiales como Mayor Número de Verduras o Mayor Cantidad de X Verdura se admiten empates, en estos casos, todos los jugadores que compartan el empate recibirán los puntos. 

El jugador con el puntaje más alto se declara como ganador de la partida. 