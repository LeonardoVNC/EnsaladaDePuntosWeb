# Diseño de la API REST

Todos los endpoints usan JSON tanto para entrada como para salida.
Base URL: `/api/game`

## Endpoints

### POST `/api/game`
Crea una sala nueva.

**Request:**
```json
{ "playerName": "Patricio" }
```

**Response 201:**
```json
{ "gameId": "abc123", "playerId": "x9k2m1", "phase": "waiting" }
```

---

### POST `/api/game/:id/join`
Un jugador se une a una sala existente.

**Request:**
```json
{ "playerName": "Rafael" }
```

**Response 200:**
```json
{ "playerId": "y7n3p2", "phase": "waiting", "playerCount": 2 }
```

**Errores:**
```json
{ "error": "Sala no encontrada" }
{ "error": "La partida ya está en curso" }
{ "error": "La sala está llena" }
```

---

### POST `/api/game/:id/start`
El creador de la sala inicia la partida.

**Request:**
```json
{ "playerId": "x9k2m1" }
```

**Response 200:**
```json
{ "phase": "playing" }
```

**Errores:**
```json
{ "error": "Solo el creador puede iniciar la partida" }
{ "error": "Se necesitan al menos 2 jugadores" }
```

---

### GET `/api/game/:id/state`
Devuelve el estado actual de la partida. Usado por el frontend cada 2 segundos (polling).

**Response 200:**
```json
{
  "phase": "playing",
  "currentPlayerId": "x9k2m1",
  "players": [
    { "id": "x9k2m1", "name": "Patricio", "vegetableCount": 3, "recipeCount": 1 }
  ],
  "table": [
    {
      "topRecipe": { "vegetable": "Tomate", "functions": [{ "type": "Count", "vegetable": "Tomate", "every": 1, "points": 2 }] },
      "veg1": { "vegetable": "Zanahoria", "functions": [] },
      "veg2": { "vegetable": "Col", "functions": [] },
      "pileSize": 31
    }
  ]
}
```

---

### POST `/api/game/:id/play`
El jugador activo toma una carta del tablero.

**Request:**
```json
{ "playerId": "x9k2m1", "columnIndex": 1, "rowIndex": 0 }
```

`rowIndex`: 0 = receta, 1 = verdura slot 0, 2 = verdura slot 1

**Response 200:** estado actualizado (mismo formato que GET state)

**Errores:**
```json
{ "error": "No es tu turno" }
{ "error": "La columna seleccionada no tiene carta disponible" }
{ "error": "La partida no está en curso" }
```

---

### GET `/api/game/:id/results`
Devuelve los resultados finales. Solo disponible cuando `phase === 'finished'`.

**Response 200:**
```json
{
  "winners": ["x9k2m1"],
  "scores": [
    {
      "playerId": "x9k2m1",
      "playerName": "Patricio",
      "total": 18,
      "points": [6, 7, 5],
      "vegetables": {
        "Tomate": 3, "Zanahoria": 2, "Col": 0,
        "Lechuga": 1, "Pimiento": 0, "Cebolla": 1
      }
    }
  ]
}
```