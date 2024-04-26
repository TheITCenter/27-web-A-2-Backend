const isAdmin = (req, res, next) => {
    if (req.role === 'ADMIN'){
        next()
    } else {
        return res.status(403).json({
            msg: 'Unauthorization role'
        })
    }
}

export { isAdmin }