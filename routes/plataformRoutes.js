import express from 'express';
import { createPlataform, getAllPlataforms, getPlataformByName } from '../controllers/plataformController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const plataformRoutes = express.Router()

plataformRoutes.post('/', authValidator, isAdmin, createPlataform) //Only admin can create a plataform

plataformRoutes.get('/', authValidator, getAllPlataforms)
plataformRoutes.get('/:name', authValidator, getPlataformByName)

export default plataformRoutes
