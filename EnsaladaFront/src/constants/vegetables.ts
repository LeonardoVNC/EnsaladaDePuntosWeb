import type { VegetableType } from '../types/api'
import tomate from '../assets/Tomate.png';
import zanahoria from '../assets/Zanahoria.png';
import col from '../assets/Col.png';
import lechuga from '../assets/Lechuga.png';
import pimiento from '../assets/Pimiento.png';
import cebolla from '../assets/Cebolla.png';

export const VEGETABLE_COLOR: Record<VegetableType, string> = {
    Tomate: '#c83e18',
    Zanahoria: '#f88126',
    Col: '#7e1086',
    Lechuga: '#45ac3f',
    Pimiento: '#e9bf35',
    Cebolla: '#db39ad'
}

export const VEGETABLE_SRC: Record<VegetableType, string> = {
    Tomate: tomate,
    Zanahoria: zanahoria,
    Col: col,
    Lechuga: lechuga,
    Pimiento: pimiento,
    Cebolla: cebolla
}

export const images = { tomate, zanahoria, col, lechuga, pimiento, cebolla }