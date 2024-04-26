import Gender from "../models/Gender.js";

// Create Only Admin
const createGender = async (req, res) => {
    try {
        const gender = await Gender.create(req.body);
        res.status(201).json({
            msg: "gender created",
            gender,
        });
    } catch (error) {
        res.status(400).json({
            msg: "fail to create gender",
            error,
        });
    }
}

// Read
    // Get all
const getAllGenders = async (req, res) => {
    try {
        const allGenders = await Gender.find();
        res.status(200).json({
            msg: 'All Genders',
            allGenders
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error when get all Genders',
            error
        })
    }
}
    // Get by name
const getGenderByName = async (req, res) => {
    try{
        const { name } = req.params;
        const getGenderName = await Gender.findOne({ name });
        if(!getGenderName){
            return res.status(404).json({
                msg: 'Gender not found'
            })
        }
        res.status(200).json({
            msg: 'Gender by name',
            getGenderName
        })
    } catch(error){
        res.status(500).json({
            msg: 'Error when get Gender by name',
            error
        })
    }
}

export { createGender, getAllGenders, getGenderByName }