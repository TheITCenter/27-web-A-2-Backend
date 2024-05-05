import Plataform from "../models/Plataform.js";

// Create Only Admin
const createPlataform = async (req, res) => {
    try {
        const plataform = await Plataform.create(req.body);
        res.status(201).json({
            msg: 'Plataform created',
            plataform
        })
        
    } catch (error) {
        res.status(500).json({
            msg: 'Error when create the Plataform',
            error
        })
    }
}
// Read
    // Get all
const getAllPlataforms = async (req, res) => {
    try {
        const allPlataforms = await Plataform.find();
        const count = await Plataform.countDocuments();
        res.status(200).json({
            msg: 'All Plataforms',
            count,
            allPlataforms
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error when get all Plataforms',
            error
        })
    }
}
    // Get by name
const getPlataformByName = async (req, res) => {
    try{
        const { name } = req.params;
        const getPlataformName = await Plataform.findOne({ name });
        if(!getPlataformName){
            return res.status(404).json({
                msg: 'Plataform not found'
            })
        }
        res.status(200).json({
            msg: 'Plataform by name',
            getPlataformName
        })
    } catch(error){
        res.status(500).json({
            msg: 'Error when get Plataform by name',
            error
        })
    }
}

const deletePlatformByName = async (req, res) => { 
    try {
        const { name } = req.params;
        const plataform = await Plataform.findOneAndDelete({ name })
        if (!plataform) {
            return res.status(404).json({
                msg: 'Plataform not found'
            })
        }
        res.status(200).json({
            msg: 'Plataform deleted',
            plataform
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Error when delete Plataform by name',
            error
        })
    }
}

const softDeleteGame = async (req, res) => {
    try {
        const { name } = req.params
        const detetGame = await Games.findOneAndUpdate(name,
            {
                isDeleted :true
            });
        
        res.status(200).json(detetGame);
    } catch (error) {
        res.status(500).json({
            msg: 'Error when delete the game',
            error
        })
    }

}

export { createPlataform, getAllPlataforms, getPlataformByName, deletePlatformByName }