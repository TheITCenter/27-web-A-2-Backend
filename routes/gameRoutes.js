import express from 'express'
import { createGame, getGameByName, getAllGames, updateGameByName, softDeleteGame } from '../controllers/gamesController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin'

const gameRouter = express.Router()

gameRouter.post('/', authValidator, isAdmin, createGame)
gameRouter.get('/', getAllGames)

gameRouter.get('/:name', getGameByName)

gameRouter.patch('/:name', authValidator, isAdmin, updateGameByName)

gameRouter.delete('/:id', authValidator, isAdmin, softDeleteGame)

// router.get('/:id', getGameById)


// router.get('/:id/reviews', getGameReviews)
// router.post('/:id/reviews', createGameReview)

// router.get('/:id/reviews/:reviewId', getGameReview)
// router.patch('/:id/reviews/:reviewId', updateGameReview)

// router.delete('/:id/reviews/:reviewId', deleteGameReview)

export default gameRouter