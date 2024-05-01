import { Decimal128, Int32 } from "mongodb";
import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
    name_game: {
        type: String,
        required: true,
    },
    development_studio: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        requiered:true
    },
    plataform : [
        {
            type:[mongoose.Schema.Types.ObjectId],
            ref: 'Plataform'
        },
    ],
    gender : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gender',
        },
    ],
    sku: {
        type: Number,
        required: true,
        unique: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    availableItems: {
        type: Number,
        requiered: true
    },
    price: {
        type: Decimal128,
        requiered: true
    },
    image: {
        type: String
    },
    reviews: {
        type: String,
    },
    requierements: {
        type: String,
    }
})

export default mongoose.model('Games', gamesSchema)