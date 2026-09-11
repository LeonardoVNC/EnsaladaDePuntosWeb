import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))

app.get('/api/ping', (_req, res) => {
    res.json({ message: 'Buen día querido' })
})

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})