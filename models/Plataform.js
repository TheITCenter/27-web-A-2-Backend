import mongoose from "mongoose";

const plataformSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model("Plataform", plataformSchema)