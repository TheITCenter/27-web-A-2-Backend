import mongoose from "mongoose";

const genderSchema = new mongoose.Schema({
    name_gender: {
        type: String,
        required: true
    }
})

export default mongoose.model('Gender', genderSchema)