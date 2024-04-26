import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    user_name: {
        type: String,
        require: true,
        unique: true
    },
    birthday: {
        type: Date
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHER'], default: 'OTHER'
    },
    role: {
        type: String,
        enum: ['ADMIN', 'CUSTOMER'], default: 'CUSTOMER'
    },
    favorite_game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    updated: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('User', userSchema)