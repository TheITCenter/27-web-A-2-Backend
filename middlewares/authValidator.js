import jwt from 'jwt-simple'
import { tokenKeyProvi } from '../controllers/authController.js'

const authValidator = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        res.status(403).json({
            msg: 'Authorization header missing'
        })
    }

    try {
        const payload = jwt.decode(token, tokenKeyProvi)

        req.role = payload.role

        next()
    } catch (error) {
        res.status(403).json({
            msg: 'Invalid token'
        })
    }
}

export { authValidator }
