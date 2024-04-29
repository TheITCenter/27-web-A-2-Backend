import Games from "../models/Games.js";
import Gender from "../models/Gender.js";
import Plataform from "../models/Plataform.js";

//CREATE 
//CREATE A NEW VIDEOGAME
const createVideogame = async (req, res) => {
    try {
        const createVideogame = await Games.create(req.body);
        res.status(201).json({
            msg: "gender created",
            createVideogame,
        });
    } catch (error) {
        res.status(400).json({
            msg: "The videogame cannot be recorded in inventory, please try again",
            error,
        });
    }
}
//validación para evitar que se creen duplicados


// READ
//GET VIDEOGAMES BY NAME INCLUDES
const getGames = async (req, res) => {
    try {
        const videogames = await getGames.includes();
        res.status(200).json({
            msg: 'Videogames',
        })
        videogames;
    } catch (error) {
        res.status(404).json({
            msg: 'Videogame not found, please try again',
            error
        })
    }
}
    //GET VIDEOGAMES BY SKU
const getVideogamesBySKU = async (req, res) => {
    try{
        const { code } = req.params;
        const getVideogamesBySKU = await Games.findOne({ code });
        if(! getVideogamesBySKU){
            return res.status(404).json({
                msg: 'Gender not found'
            })
        }
        res.status(200).json({
            msg: 'Here are the results',
            getVideogamesBySKU
        })
    } catch(error){
        res.status(500).json({
            msg: 'Error when get videogame by SKU, please try again',
            error
        })
    }
}

export { getGames, getVideogamesBySKU }