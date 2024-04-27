import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jwt-simple"

const register = async (req, res) => {
    try {
        const reqData = [
            'name',
            'user_name',
            'email',
            'password'
        ]

        for (data of reqData) {
            if (!req.body[data]) {
                return res.status(400).json({
                    msg: 'Mising Fields',
                    error: `Missing Data ${data}`
                })
            }
        }

        const newPass = await bcrypt.hash(req.body.password, 10)

        req.body.password = newPass

        const newUser = await User.create(req.body);

        const payload = {
            _id: newUser._id,
            name: newUser.user_name,
            email: newUser.email
        }

        const token = jwt.encode(payload, process.env.SECRET_KEY)

        newUser.password = undefined

        res.status(201).json({
            msg: "User created",
            token,
            newUser
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error make User',
            error
        })
    }
}

const login = async (req, res) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            msg: 'Bad Login'
        })
    }

    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if(!user){
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        const isPassCorrect = await bcrypt.compare(req.body.password, user.password)

        if(isPassCorrect){
            const payload =  user

            const token = jwt.encode(payload, process.env.SECRET_KEY)

            return res.status(200).json({
                msg: 'Login success',
                token
            })
        } else{
            return res.status(401).json({
                msg: 'Datas incorrect'
            })
        }

    } catch (error) {
        res.status(500).json({
            msg: 'Error make Login',
            error
        })
    }
}

export { register, login }