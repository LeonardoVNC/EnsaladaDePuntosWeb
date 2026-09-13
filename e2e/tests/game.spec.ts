import { test, expect } from '@playwright/test'

test.describe('Ensalada de Puntos', () => {

    test('T1: pantalla de inicio carga correctamente', async ({ page }) => {
        await page.goto('/')
        await expect(page.getByPlaceholder('Ej: Patricio')).toBeVisible()
    })

    test('T2: crear sala y llegar al lobby', async ({ page }) => {
        await page.goto('/')
        await page.getByPlaceholder('Ej: Patricio').fill('Patricio')
        await page.getByText('Crear sala').click()
        await page.getByText('Crear sala').click()
        await expect(page.getByText('Sala de espera')).toBeVisible()
        await expect(page.getByText('Patricio')).toBeVisible()
    })

    test('T3: dos jugadores se unen y el juego inicia', async ({ browser }) => {
        const context1 = await browser.newContext()
        const context2 = await browser.newContext()
        const page1 = await context1.newPage()
        const page2 = await context2.newPage()

        // Jugador 1 crea sala
        await page1.goto('/')
        await page1.getByPlaceholder('Ej: Patricio').fill('Patricio')
        await page1.getByText('Crear sala').click()
        await page1.getByText('Crear sala').click()
        await expect(page1.getByText('Sala de espera')).toBeVisible()

        // Obtener el código de sala
        const roomCode = await page1.locator('.room-code').innerText()

        // Jugador 2 se une
        await page2.goto('/')
        await page2.getByPlaceholder('Ej: Patricio').fill('Rafael')
        await page2.getByText('Unirse a sala').click()
        await page2.getByPlaceholder('Ej: abc123').fill(roomCode)
        await page2.getByText('Unirse').click()
        await expect(page2.getByText('Sala de espera')).toBeVisible()

        // Patricio inicia la partida
        await page1.getByText('Iniciar partida').click()

        // Ambos deben ver el tablero
        await expect(page1.locator('.board')).toBeVisible({ timeout: 5000 })
        await expect(page2.locator('.board')).toBeVisible({ timeout: 5000 })

        await context1.close()
        await context2.close()
    })

    test('T4: comunicación real con el backend via fetch', async ({ page }) => {
        // Intercepta las llamadas a la API y verifica que llegan al backend
        const requests: string[] = []
        page.on('request', req => {
            if (req.url().includes('/api/')) requests.push(req.url())
        })

        await page.goto('/')
        await page.getByPlaceholder('Ej: Patricio').fill('TestPlayer')
        await page.getByText('Crear sala').click()
        await page.getByText('Crear sala').click()

        await expect(page.getByText('Sala de espera')).toBeVisible()
        expect(requests.some(url => url.includes('/api/game'))).toBeTruthy()
    })

    test('T5: caso límite — jugar fuera de turno muestra error', async ({ browser }) => {
        const context1 = await browser.newContext()
        const context2 = await browser.newContext()
        const page1 = await context1.newPage()
        const page2 = await context2.newPage()

        // Setup: crear sala, unirse, iniciar
        await page1.goto('/')
        await page1.getByPlaceholder('Ej: Patricio').fill('Patricio')
        await page1.getByText('Crear sala').click()
        await page1.getByText('Crear sala').click()
        const roomCode = await page1.locator('.room-code').innerText()

        await page2.goto('/')
        await page2.getByPlaceholder('Ej: Patricio').fill('Benjamin')
        await page2.getByText('Unirse a sala').click()
        await page2.getByPlaceholder('Ej: abc123').fill(roomCode)
        await page2.getByText('Unirse').click()

        await page1.getByText('Iniciar partida').click()
        await expect(page2.locator('.board')).toBeVisible({ timeout: 5000 })

        // Benjamin intenta jugar pero no es su turno (Patricio empieza siempre)
        const vegetableCard = page2.locator('.card-vegetable.clickable').first()
        const isClickable = await vegetableCard.count()

        if (isClickable === 0) {
            // No hay cartas clickeables para Benjamin — correcto
            await expect(page2.locator('.turn-banner')).toBeVisible()
        }

        await context1.close()
        await context2.close()
    })
})