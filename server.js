import express from "express";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import plataformRoutes from "./routes/plataformRoutes.js";
import genderRouter from "./routes/genderRoutes.js";

const api = express()
api.use(express.json())

api.listen(8000, () => {
    console.log("Server is running on port 8000");
})

api.use('/auths', authRouter)
api.use('/users', userRouter)
api.use('/plataforms', plataformRoutes)
api.use('/gender', genderRouter)