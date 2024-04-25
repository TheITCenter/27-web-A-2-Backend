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
        res.status(200).json({
            msg: 'All Plataforms',
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

export { createPlataform, getAllPlataforms, getPlataformByName }