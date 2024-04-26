import express from 'express';
import { createPlataform, getAllPlataforms, getPlataformByName } from '../controllers/plataformController.js';

const plataformRoutes = express.Router()

plataformRoutes.post('/', createPlataform) //Only admin can create a plataform

plataformRoutes.get('/', getAllPlataforms)
plataformRoutes.get('/:name', getPlataformByName)

export default plataformRoutes
