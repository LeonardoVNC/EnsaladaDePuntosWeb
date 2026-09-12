import { Card } from '../types/cards'

//Tocó meter 108 cartas a mano, dolio
export const ALL_CARDS: Card[] = [
    //Pimiento
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: -2 },
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: -1 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: -1 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 4 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: -2 },
            { type: 'Count', vegetable: 'Col', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: -4 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 1 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 1 },
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 2 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 2, points: 5 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Comb2', v1: 'Tomate', v2: 'Col', points: 5 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Comb2', v1: 'Zanahoria', v2: 'Cebolla', points: 5 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Count', vegetable: 'Lechuga', every: 3, points: 8 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Comb3', v1: 'Tomate', v2: 'Lechuga', v3: 'Zanahoria', points: 8 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Comb3', v1: 'Pimiento', v2: 'Lechuga', v3: 'Col', points: 8 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'MaxTotal', points: 10 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Min', vegetable: "Lechuga", points: 7 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'Max', vegetable: "Lechuga", points: 10 }
        ]
    },
    {
        vegetable: 'Pimiento',
        functions: [
            { type: 'OddEven', vegetable: "Lechuga", oddPoints: 3, evenPoints: 7 }
        ]
    },


    //Lechuga
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 2 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Col', every: 1, points: -2 },
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 1 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 1 },
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: -1 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -1 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Col', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: -4 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 4 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: -2 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 2, points: 5 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Comb2', v1: 'Col', v2: 'Cebolla', points: 5 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Comb2', v1: 'Zanahoria', v2: 'Tomate', points: 5 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Count', vegetable: 'Pimiento', every: 3, points: 8 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Comb3', v1: 'Cebolla', v2: 'Pimiento', v3: 'Col', points: 8 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Comb3', v1: 'Lechuga', v2: 'Pimiento', v3: 'Zanahoria', points: 8 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Max', vegetable: "Pimiento", points: 10 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'Min', vegetable: "Pimiento", points: 7 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'MinTotal', points: 7 }
        ]
    },
    {
        vegetable: 'Lechuga',
        functions: [
            { type: 'OddEven', vegetable: "Pimiento", oddPoints: 3, evenPoints: 7 }
        ]
    },

    //Cebolla
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 2 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -2 },
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 1 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 1 },
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: -1 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: -1 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: -4 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 4 },
            { type: 'Count', vegetable: 'Col', every: 1, points: -2 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 2, points: 5 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Comb2', v1: 'Zanahoria', v2: 'Pimiento', points: 5 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Count', vegetable: 'Tomate', every: 3, points: 8 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Comb3', v1: 'Cebolla', v2: 'Tomate', v3: 'Pimiento', points: 8 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Comb3', v1: 'Col', v2: 'Tomate', v3: 'Lechuga', points: 8 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Comb2', v1: 'Col', v2: 'Lechuga', points: 5 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Max', vegetable: "Tomate", points: 10 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'Min', vegetable: "Tomate", points: 7 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'GroupCount', startsAt: 2, points: 3 }
        ]
    },
    {
        vegetable: 'Cebolla',
        functions: [
            { type: 'OddEven', vegetable: "Tomate", oddPoints: 3, evenPoints: 7 }
        ]
    },

    //Zanahoria
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 2 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 1 },
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 1 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: -2 },
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -1 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: -1 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -4 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 4 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -2 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 2, points: 5 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Comb2', v1: 'Tomate', v2: 'Lechuga', points: 5 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Count', vegetable: 'Col', every: 3, points: 8 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Comb2', v1: 'Cebolla', v2: 'Pimiento', points: 5 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Comb3', v1: 'Pimiento', v2: 'Col', v3: 'Tomate', points: 8 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Max', vegetable: "Col", points: 10 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'Min', vegetable: "Col", points: 7 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'GroupCount', startsAt: 3, points: 5 }
        ]
    },
    {
        vegetable: 'Zanahoria',
        functions: [
            { type: 'OddEven', vegetable: "Col", oddPoints: 3, evenPoints: 7 }
        ]
    },

    //Col
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 2 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: 1 },
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 1 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: -2 },
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: -1 },
            { type: 'Count', vegetable: 'Col', every: 1, points: -1 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: -4 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 4 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -2 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Col', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 2, points: 5 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Comb2', v1: 'Tomate', v2: 'Pimiento', points: 5 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 3, points: 8 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Comb2', v1: 'Cebolla', v2: 'Lechuga', points: 5 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Comb3', v1: 'Col', v2: 'Zanahoria', v3: 'Tomate', points: 8 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Comb3', v1: 'Lechuga', v2: 'Zanahoria', v3: 'Cebolla', points: 8 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Max', vegetable: "Zanahoria", points: 10 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'Min', vegetable: "Zanahoria", points: 7 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'NotAllVegetables', points: 5 }
        ]
    },
    {
        vegetable: 'Col',
        functions: [
            { type: 'OddEven', vegetable: "Zanahoria", oddPoints: 3, evenPoints: 7 }
        ]
    },

    //Tomate
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 2 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 1 },
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Col', every: 1, points: 1 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: -2 },
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 3 },
            { type: 'Count', vegetable: 'Col', every: 1, points: -1 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: -1 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Pimiento', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Col', every: 1, points: -4 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 4 },
            { type: 'Count', vegetable: 'Zanahoria', every: 1, points: -2 },
            { type: 'Count', vegetable: 'Lechuga', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 1, points: 2 },
            { type: 'Count', vegetable: 'Col', every: 1, points: 1 },
            { type: 'Count', vegetable: 'Tomate', every: 1, points: -2 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 2, points: 5 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Comb2', v1: 'Col', v2: 'Pimiento', points: 5 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 3, points: 8 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Comb2', v1: 'Zanahoria', v2: 'Lechuga', points: 5 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Count', vegetable: 'Cebolla', every: 3, points: 8 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Comb3', v1: 'Cebolla', v2: 'Zanahoria', v3: 'Pimiento', points: 8 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Comb3', v1: 'Tomate', v2: 'Cebolla', v3: 'Lechuga', points: 8 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Max', vegetable: "Cebolla", points: 10 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'Min', vegetable: "Cebolla", points: 7 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'AllVegetables', points: 12 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'OddEven', vegetable: "Cebolla", oddPoints: 3, evenPoints: 7 }
        ]
    },
    {
        vegetable: 'Tomate',
        functions: [
            { type: 'OddEven', vegetable: "Cebolla", oddPoints: 3, evenPoints: 7 }
        ]
    }
]