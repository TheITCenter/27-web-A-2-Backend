import jwt from 'jwt-simple'

const authValidator = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        res.status(403).json({
            msg: 'Authorization header missing'
        })
    }

    try {
        const payload = jwt.decode(token, process.env.SECRET_KEY)

        req.role = payload.role

        next()
    } catch (error) {
        res.status(403).json({
            msg: 'Invalid token'
        })
    }
}

export { authValidator }
