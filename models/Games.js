import { Int32 } from "mongodb";
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
        type: Int32,
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
        type: Int32,
        requiered: true
    },
    price: {
        type: Float32Array,
        requiered: true
    },
    /**image: { //jojojo aquí no sé como poner el tipo de archivo... n_n'
        type: string
    }*/
    reviews: {
        type: Text
    },
    requierements: {
        type: Text
    }
})

export default mongoose.model('Games', gamesSchema)