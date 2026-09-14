# Investigación técnica

## Playwright — Pruebas E2E

### ¿Qué es?
Playwright es una herramienta de pruebas end-to-end desarrollada por Microsoft que permite controlar navegadores reales (Chromium, Firefox, WebKit) mediante código. A diferencia de otras herramientas, soporta múltiples contextos de navegador independientes en un mismo test, lo que lo hace ideal para probar aplicaciones multijugador.

### Fuentes consultadas
- Documentación oficial: https://playwright.dev/docs/intro
- Guía de múltiples páginas: https://playwright.dev/docs/browser-contexts
- Integración con GitHub Actions: https://playwright.dev/docs/ci-github-actions

### Cómo ejecutar las pruebas localmente
```bash
# Modo headless
cd e2e && npx playwright test

# Modo visual en Chrome
cd e2e && npx playwright test --headed
```

### Cómo ejecutar contra producción
```bash
BASE_URL=https://ensalada-de-puntos.onrender.com npx playwright test --headed
```

### Limitaciones encontradas
- El plan gratuito de Render hiberna el servidor tras 15 minutos de inactividad, lo que puede causar que el primer test falle por timeout. La solución es abrir la URL manualmente antes de correr los tests en la defensa.
- Los tests de múltiples jugadores requieren sincronización cuidadosa entre contextos para evitar condiciones de carrera.


## Render — Servicio de publicación

### ¿Qué es?
Render es una plataforma de cloud hosting que permite desplegar aplicaciones web, APIs y servicios. Ofrece un plan gratuito con soporte para Node.js, deploy automático desde GitHub y HTTPS incluido.

### Proceso de configuración
1. Crear cuenta en render.com y conectar la cuenta de GitHub
2. Crear un Web Service apuntando al repositorio
3. Configurar el build command: `cd EnsaladaFront && npm install && npm run build && cd ../server && npm install && npm run build`
4. Configurar el start command: `cd server && npm start`
5. Agregar la variable de entorno `PORT=3000`
6. Copiar el Deploy Hook URL y agregarlo como secret en GitHub Actions

### Variables de entorno necesarias
| Variable | Valor | Descripción |
|---|---|---|
| PORT | 3000 | Puerto en que escucha Express |

### Deploy automático
Cada push a `main` activa el workflow `deploy.yml` de GitHub Actions, que hace un POST al Deploy Hook de Render. Render descarga el código actualizado, ejecuta el build command y reinicia el servidor con el start command.

### Limitaciones encontradas
- El plan gratuito hiberna el servicio tras 15 minutos sin tráfico. El primer request después de la hibernación puede tardar hasta 30 segundos.
- El plan gratuito tiene límite de 750 horas de cómputo mensuales.
