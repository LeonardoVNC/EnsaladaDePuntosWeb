import { Router } from 'express'
import { gameController } from '../controller/game.controller'

const router = Router()

router.post('/', gameController.createRoom)
router.post('/:id/join', gameController.joinRoom)
router.post('/:id/start', gameController.startGame)
router.get('/:id/state', gameController.getState)

export default router