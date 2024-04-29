import User from "../models/User.js";
// import bcrypt from "bcrypt"
// import jwt from "jwt-simple"

//Create
/* const createUser = async (req, res) => {
    se trato de realizar el CRUD completo desde acá, pero recorde el authControler y el Create se cambio al authController.

    se han comentado en los demas archivos este metodo, ya que no se va a usar
}
 */
//Read(only ADMIN)
    //Only Admin
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(
            {
                isDeleted: false
            });

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            msg: 'Users not found',
            error
        })
    }
}

    //Only my User
const getUserById = async (req, res) => {
    try {
        if (!req.body._id){
            return res.status(400).json({
                msg: 'User not foun'
            })
        }

        const user = await User.findById(req.params.userId);

        res.status(201).json(user);        
    } catch (error) {
        res.status(500).json({
            msg: 'User not Found',
            error
        })
    }
}
//Update
const updateUser = async (req, res) => {
    try {
        const { userId } = req.body;

        const updateUser = await User.updateOne({
            _id: userId
            },
            req.body
        )

        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({
            msg: 'User not Found',
            error
        })
    }
}
//Delet
    //soft delete, make for users
    const deleteUser = async (req,res) => {
        try {
            const deleteUser = await User.findByIdAndUpdate(req.params.userId,
            {
                isDeleted: true
            })

            res.status(200).json(deleteUser)
        } catch(error){
        res.status(500).json({
            msg: "This user could not be deleted",
            error
        })
        }
    }

export { /* createUser ,*/ getAllUsers, getUserById, updateUser, deleteUser }