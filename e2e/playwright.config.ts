import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    use: {
        baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
        browserName: 'chromium'
    },
    webServer: {
        command: 'cd ../server && npm start',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
        timeout: 15000
    }
})