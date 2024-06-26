import express from 'express'
import { createGender, getAllGenders, getGenderByName } from '../controllers/genderController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin.js'

const genderRouter = express.Router()

genderRouter.post('/', authValidator, isAdmin, createGender) //Only admin can create a gender

genderRouter.get('/',  getAllGenders)
genderRouter.get('/:name', getGenderByName)

export default genderRouter
