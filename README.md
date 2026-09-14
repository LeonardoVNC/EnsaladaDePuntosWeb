# <img height="25" src="./EnsaladaFront/src/assets/pagelogo.png"> Ensalada de Puntos Web

Implementación web multijugador del juego de cartas Ensalada de Puntos.

🔗 **Aplicación publicada:** https://ensalada-de-puntos.onrender.com

<div id="Arduino">
    <ul align="center">
        <img alt="PNG" src="https://i.ibb.co/0y4SFD4d/screen.png">
    </ul>
</div>

## Tecnologías
- Frontend: React + TypeScript + Vite
- Backend: Express + TypeScript
- Pruebas E2E: Playwright
- Deploy: Render
- CI/CD: GitHub Actions

## Requisitos
- Node.js 22+
- npm

## <img height="25" src="./EnsaladaFront/src/assets/Col.png"> Instalación

```bash
# Instalar dependencias del backend
cd server && npm i

# Instalar dependencias del frontend
cd EnsaladaFront && npm i

# Instalar dependencias E2E
cd e2e && npm i
```

## Desarrollo local

```bash
# Terminal 1 — backend
cd server && npm run dev

# Terminal 2 — frontend
cd EnsaladaFront && npm run dev
```

## Build para producción

```bash
cd EnsaladaFront && npm run build
cd server && npm run build
cd server && npm start
```

## <img height="25" src="./EnsaladaFront/src/assets/Cebolla.png"> Pruebas

```bash
# Linting
cd server && npm run lint
cd EnsaladaFront && npm run lint

# E2E headless
cd e2e && npx playwright test

# E2E visual en Chrome
cd e2e && npx playwright test --headed

# E2E contra producción
BASE_URL=https://ensalada-de-puntos.onrender.com npx playwright test --headed
```

## <img height="25" src="./EnsaladaFront/src/assets/Lechuga.png"> Arquitectura
```
EnsaladaDePuntosWeb/
├── EnsaladaFront/
│ └── src/
│ ├── components/
│ ├── hooks/
│ ├── api/ 
│ └── types/
├── server/
│ └── src/
│ ├── routes/
│ ├── controllers/
│ ├── services/
│ ├── repository/
│ ├── logic/
│ └── types/
├── e2e/
├── docs/
└── .github/workflows/
```

## <img height="25" src="./EnsaladaFront/src/assets/Tomate.png"> Endpoints principales

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/game` | Crear sala |
| POST | `/api/game/:id/join` | Unirse a sala |
| POST | `/api/game/:id/start` | Iniciar partida |
| GET | `/api/game/:id/state` | Estado actual (polling) |
| POST | `/api/game/:id/play` | Jugar una carta |
| GET | `/api/game/:id/results` | Resultados finales |

## Variables de entorno

| Variable | Valor por defecto | Descripción |
|---|---|---|
| PORT | 3000 | Puerto del servidor Express |

## <img height="25" src="./EnsaladaFront/src/assets/Zanahoria.png"> GitHub Actions

| Workflow | Trigger | Descripción |
|---|---|---|
| `lint.yml` | push/PR a main | ESLint en frontend y backend |
| `e2e.yml` | push/PR a main | Pruebas Playwright en headless |
| `deploy.yml` | push a main | Deploy automático a Render |