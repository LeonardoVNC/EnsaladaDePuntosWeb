# Proceso de Pleaneación y Desarrollo del Proyecto
A lo largo de este documento voy a comentar y detallar los pasos que fui recorriendo y las decisiones que fui tomando para lograr llegar a desarrollar el presente proyecto/juego web, Ensalada de Puntos. 

Para facilitar la lectura del documento, voy a dividir su contenido por secciones.

## Selección Inicial de la Idea
La primera decisión importante (probablemente la más importante porque tener que cambiar de parecer a medio proyecto hubiera sido una pérdida total de tiempo) que tuve que tomar fue escoger una idea que llevar a cabo. Las opciones eran varias, pero evidentemente habían algunas mucho más complejas que otras, por lo que primero decidí aplicarle un par de "filtros" a mis ideas para tratar de asegurar que la idea seleccionada pudiera cumplir con los requisitos de presentación del proyecto. Ese par de filtros fueron los siguientes:
- Debía ser un juego que me gustara para no perder las ganas de trabajar en él
- Debía cumplir con cierto estándar de los juegos web de "ser repetitivo pero entretenido"

Tras aplicar este par de filtros me quedé con 3 ideas:
- **SpotIt (o Dobble)**, un juego de mesa al cual personalmente le guardo bastante cariño por relacionarlo a mis primeros días en la universidad. Se trata de un juego de agilidad mental donde se debe encontrar la figura o imagen que comparta la carta en el tope de tu mano con la carta en el centro de la mesa. El jugador más rápido colocará su carta primero y nuevamente todos deberan volver a empezar a buscar, gana el primer jugador en liberarse de todas sus cartas.
- **Ensalada de Puntos**, un juego de mesa de recolección de recuros al cual suelo jugar con mi familia. Básicamente se trata de recolectar 2 tipos de tarjetas, Verduras y Recetas, las Recetas son maneras de sumar puntaje, recibiendo un puntaje por cada verdura en tu mano, siendo recompensado por ser el que más verduras recolecte, entre otras formas de sumar puntajes. La división de las tarjetas hace que sea muy probable que una carta que estás buscando se termine "descartando" debido a que alguien quería jugar una carta en la misma columna, o porque simplemente el otro jugador quería esa carta también, por otro lado las verduras son "el input" a esas recetas, esto al superar cierta cantidad o al juntar varios tipos de verduras.
- **Virus**, probablemente el juego al que menos he jugado en esta lista pero uno muy entretenido al fin y al cabo. El objetivo es conseguir 3 cartas de "órganos" para formar un "cuerpo sano", creo que olvide mencionarlo pero es un juego inspirado en medicina de cierto modo, se pueden emplear cartas para "fortalecer" tus órganos o puede usar cartas de virus para "atacar" los órganos de otros jugadores. Hay muchas interacciones entre jugadores para evitar que alguien gane mientras haces lo posible para ganar tú, es bastante entretenido.

Cómo se puede ver, los 3 son juegos de mesa... Me gustan bastante de esos... :p

## Selección Final de la Idea
Ya con las 3 ideas principales decididas tocaba ver cual era el más conveniente para desarrollar y cumplir con los requisitos de presentación. Una vez llegó el documento de requisitos para el examen procedí nuevamente a descartar ideas según como iba avanzando el documento.

Con el requisito de un Backend que participara en partida me puse a pensar mucho más a detalle sobre como sería el flujo de la partida, y fue aqui donde SpotIt palidecía, jugar en un solo dispositivo era extremandamente complicado, pensar en divisiones de controles sería muy raro, más aun si se tiene que seleccionar una de varias imágenes, quizá podrían enumerarse pero sería muy poco intuitivo, lo más consistente era usar un click para darle a la imagen que compartan ambas cartas, pero para esto se debía usar un dispositivo por jugador, esto generaba otro problema... Latencia, recién llevamos la materia de Sistemas Distribuidos, donde vemos las incosistencias que pueden surgir con varios nodos interactuando al mismo tiempo, por lo que un juego de agilidad y velocidad en un sistema así sin conexión casi que instantanea sonaba muy complicado. Finalmente pensar en cómo tendría que usar CSS para diseñar las cartas del juego, los pocos estados que se me ocurrieron y la simpleza del backend terminaron por desanimarme de usar esta idea.

Entre Virus y Ensalada de Puntos terminé optando por Ensalada de Puntos, pues me gustaba más el juego y la lógica de cálculo de puntos se me hacía interesante de programar. Virus tenía una mecánica que me interesaba también poder ver más de cerca, las cartas que afectan a cartas de otro jugadores, como si fueran modificadores que en cierto punto pueden quitar cartas de la mano del rival, era una interacción muy interesante, pero terminé decantandome por las fórmulas y el estilo visual de Ensalada de Puntos.

## Puliendo la Idea
Con la idea seleccionada y asegurandome de cumplir con los requisitos de presentación, empece a planear cómo se llevaría a cabo todo el juego para cumplir con los criterios de calificación. Los cambios y decisiones más importantes fueron:
- Al inicio pense en un juego llevado a cabo en un único dispositivo, una vez un jugador juega su turno se le pasa el dispositivo a otro para que juegue, en general es un juego tranquilo asi que no debía de afectar el traspaso de turnos. Sin embargo, este enfoque dejaba al Backend con muy pocas responsabilidades, la única importante era entregar las cartas ya barajeadas y más adelante calcular los resultados, lo que con duras penas cumplia los requisitos. Tras pensarlo bastante me terminé decantando por un juego en varios dispositivos a través de un control de salas, creas una sala, recibes un código y otros jugadores pueden unirse con ese código a tu sala para que todos jueguen juntos, esto le da más responsabilidad al backend y le quita trabajo al frontend, lo que en general es bueno para mantener un único punto de verdad en el backend.
- Al inicio del proyecto pensé en utilizar una DB como PostgreSQL para almacenar la información de las cartas y otros datos, pero al analizar el proyecto me di cuenta que no habían otros datos que guardar, además, viendo el requisito del deploy recordé malas experiencias que tuve con levantar servicios contectados entre sí, ya backend y frontend iban a servirse en la misma IP y el mismo Puerto, pero la DB debía de correr en otra sección distinta, asi que para evitar tener problemas y no complicar en vano el proyecto, opté por guardar la información de las cartas en un archivo de constantes en el propio backend. Hardcodeado pero funcional.

## Desarrollo
Ya con la idea bien definida y las decisiones tomadas, se podía iniciar con el proyecto, ahora faltaba decidir el orden de desarrollo. 

Personalmente antes he tenido problemas con desarrollar primero la interfaz con datos mockeados, con frecuencia hay detalles que paso por alto que al momento de desarrollar el backend vuelven, y termino gastando algo de tiempo adicional haciendo que el front se ajuste a la nueva estructura de datos que responde el backend. Es por eso que esta vez opté por iniciar con el desarrollo del Backend, hacer que la lógica de juego funcione bien ahi y probar poco a poco. Una vez todo funcionara en Backend sin problemas, podría pasar a desarrollar el frontend con las respuestas en mente.

El plan salió bien en general, solo con un par de detalles que se me olvidaron que tuve que corregir un poco sobre la marcha, pero sin duda el desarrollo fue mucho más estable que en mis otros proyectos. Con el desarrollo completado se pudo pasar a cumplir con los requisitos de pruebas y automatización.

El orden en general fue:
1. Desarrollar el Backend
2. Desarrolar el Frontend sin estilos
3. Desarrollar estilos con CSS
4. Realizar pruebas QA rápidas
5. Implementar ESlint + Workflow
6. Implementar E2E + Workflow
7. Implementar Deploy + Workflow

Con estas tareas se concluyó el desarrollo del proyecto.