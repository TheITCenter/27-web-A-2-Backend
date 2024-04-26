import express from 'express'
import { createGender, getAllGenders, getGenderByName } from '../controllers/genderController.js'

const genderRouter = express.Router()

genderRouter.post('/', createGender) //Only admin can create a gender

genderRouter.get('/', getAllGenders)
genderRouter.get('/:name', getGenderByName)

export default genderRouter
