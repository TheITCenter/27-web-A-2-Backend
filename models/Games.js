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
    platform : [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Plataform',
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
    }
})

export default mongoose.model('Games', gamesSchema)