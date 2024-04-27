import express from 'express';
import { /* createUser, */ getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const userRouter = express.Router();

// userRouter.post('/', createUser);
userRouter.get('/', authValidator, isAdmin, getAllUsers);

userRouter.get('/:userId', authValidator, isAdmin, getUserById);

userRouter.put('/:userId', authValidator, updateUser);

userRouter.delete('/:userId', authValidator, deleteUser);

export default userRouter