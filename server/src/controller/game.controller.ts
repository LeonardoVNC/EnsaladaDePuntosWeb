import { Request, Response } from 'express'
import { gameService } from '../services/game.service'

export const gameController = {
    createRoom(req: Request, res: Response) {
        const { playerName } = req.body
        if (!playerName) {
            res.status(400).json({ error: 'Se requiere un nombre de jugador' });
            return
        }
        try {
            const result = gameService.createRoom(playerName)
            res.status(201).json(result)
        } catch (err: unknown) {
            const e = err as { status?: number; message?: string }
            res.status(e.status ?? 500).json({ error: e.message ?? 'Error interno' })
        }
    },

    joinRoom(req: Request, res: Response) {
        const { playerName } = req.body
        if (!playerName) {
            res.status(400).json({ error: 'Se requiere un nombre de jugador' });
            return
        }
        try {
            const result = gameService.joinRoom(req.params.id + "", playerName)
            res.json(result)
        } catch (err: unknown) {
            const e = err as { status?: number; message?: string }
            res.status(e.status ?? 500).json({ error: e.message ?? 'Error interno' })
        }
    },

    startGame(req: Request, res: Response) {
        const { playerId } = req.body
        if (!playerId) {
            res.status(400).json({ error: 'Se requiere playerId' });
            return
        }
        try {
            const result = gameService.startGame(req.params.id + "", playerId)
            res.json(result)
        } catch (err: unknown) {
            const e = err as { status?: number; message?: string }
            res.status(e.status ?? 500).json({ error: e.message ?? 'Error interno' })
        }
    },

    getState(req: Request, res: Response) {
        try {
            const result = gameService.getState(req.params.id + "")
            res.json(result)
        } catch (err: unknown) {
            const e = err as { status?: number; message?: string }
            res.status(e.status ?? 500).json({ error: e.message ?? 'Error interno' })
        }
    },

    playCard(req: Request, res: Response) {
        const { playerId, columnIndex, rowIndex } = req.body
        if (!playerId || columnIndex === undefined || rowIndex === undefined) {
            res.status(400).json({ error: 'Faltan campos: playerId, columnIndex, rowIndex' });
            return
        }
        try {
            const result = gameService.playCard(req.params.id + "", playerId, columnIndex, rowIndex)
            res.json(result)
        } catch (err: unknown) {
            const e = err as { status?: number; message?: string }
            res.status(e.status ?? 500).json({ error: e.message ?? 'Error interno' })
        }
    },

    getResults(req: Request, res: Response) {
        try {
            const result = gameService.getResults(req.params.id + "")
            res.json(result)
        } catch (err: unknown) {
            const e = err as { status?: number; message?: string }
            res.status(e.status ?? 500).json({ error: e.message ?? 'Error interno' })
        }
    }
}