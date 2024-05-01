import Games from '../models/Games.js';
import Plataform from '../models/Plataform.js';
import Gender from '../models/Gender.js';

// Create
const createGame = async (req, res) => {
  try {
    /**
     * 1.- Registrar Plataform en DB ✅
     * 2.- Registra Gerder
     * 2.- Registrar Games con esos authors ✅
     */
    const { plataform, gender , game } = req.body;

    if (!Array.isArray(plataform) || !Array.isArray(gender) ) {
      return res.status(400).json({
        msg: 'Body incorrecto',
      });
    }

    const plataformPromises = plataform.map((elem) => {
        return Plataform.findOneAndUpdate(
            {name: elem},
            {name: elem},
            {upsert: true, new: true}
        )
    });
    
    const plataformModels = await Promise.all(plataformPromises);

    const plataformIds = plataformModels.map((model) => {
      return model._id;
    });

    const genderPromises = gender.map((elem) => {
        return Gender.findOneAndUpdate(
            {name_gender: elem},
            {name_gender: elem},
            {upsert: true, new: true}
        )
      });  

    const genderModels = await Promise.all(genderPromises);

    const genderIds = genderModels.map((model) => {
      return model._id;
    });

    game.gender = genderIds;

    game.plataform = plataformIds;

    const newGame = await Games.create(game);

    return res.status(200).json(newGame);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Error al crear Videojuego',
      error,
    });
  }
};

// Read
const getGameByName = async (req, res) => {
    try {
      const { name } = req.params
      const game = await Games.findOne(
        {name:name})/* .populate('authors'); */
  
      if (!game) {
        return res.status(404).json({
          msg: 'Juego no encontrado',
        });
      }
  
      return res.json(game);
    } catch (error) {
      res.status(500).json({
        msg: 'Error al buscar Juego por id',
        error,
      });
    }
  };
  
const getAllGames = async (req, res) => {
    try {
      const games = await Games.find();
      if (!games) {
        return res.status(404).json({
          msg: 'Juegos no encontrados',
        });
      }
      return res.json(games);
    } catch (error) {
      res.status(500).json({
        msg: 'Error al buscar todos los juegos',
        error,
      });
    }
  };
// Update
const updateGameByName = async (req, res) => {
  try {
    const { name } = req.params
    const updateGame = await Games.updateOne({
      name_game: name
    },
    req.body
    )
    res.json(updateGame)
  } catch (error) {
    res.status(500).json({
      msg: 'Error updating the game',
      error
    })
  }
}
// Delete
const softDeleteGame = async (req, res) => {
  try {
    const { name } = req.params
    const detetGame = await Games.findOneAndUpdate(name,
      {
          isDeleted :true
      },
      {
          new: true
      });

  res.status(200).json(detetGame);
  } catch (error) {
    res.status(500).json({
      msg: 'Error deleting the game',
      error
    })
  }
}
  export { createGame, getGameByName, getAllGames, updateGameByName, softDeleteGame };
