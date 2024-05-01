import express from "express";
import {connect} from "../config.js";
import userRouter from "../routes/userRoutes.js";
import authRouter from "../routes/authRoutes.js";
import plataformRoutes from "../routes/plataformRoutes.js";
import genderRouter from "../routes/genderRoutes.js";
import gameRouter from "../routes/gameRoutes.js";
import serverless from "serverless-http";

connect();

const api = express();

api.use(express.json())

api.listen(8000, () => {
    console.log("Server is running on port 8000");
})

api.get('/test',(req, res) =>{
    res.send('Este es una prueba de conexion')
})

api.use('/.netlify/functions/auths', authRouter)
api.use('/.netlify/functions/users', userRouter)
api.use('/.netlify/functions/games', gameRouter)
api.use('/.netlify/functions/plataforms', plataformRoutes)
api.use('/.netlify/functions/gender', genderRouter)

module.exports.handler = serverless(api);