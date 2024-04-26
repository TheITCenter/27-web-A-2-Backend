import Games from '../models/Games.js';
import Plataform from '../models/Plataform.js';
import Gender from '../models/Gender.js';

const createGame = async (req, res) => {
  try {
    /**
     * 1.- Registrar Plataform en DB ✅
     * 2.- Registra Gerder
     * 2.- Registrar Games con esos authors ✅
     */
    const { plataform, gender , game } = req.body;

    if (!Array.isArray(plataform) || !Array.isArray(plataform) || !book) {
      return res.status(400).json({
        msg: 'Body incorrecto',
      });
    }

    const plataformPromises = plataform.map((elem) => {
      return Plataform.create(elem);
    });

    const plataformModels = await Promise.all(plataformPromises);

    const plataformIds = plataformModels.map((model) => {
      return model.id;
    });

    const genderPromises = gender.map((elem) => {
        return Gender.create(elem);
      });  

    const genderModels = await Promise.all(genderPromises);

    const genderIds = genderModels.map((model) => {
      return model.id;
    });

    game.gender = genderIds;

    game.plataform = plataformIds;

    const newGame = await Games.create(game);

    return res.json(newGame);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear Videojuego',
      error,
    });
  }
};

const getBookById = async (req, res) => {
    try {
      //buscar un libro por id
      const book = await Book.findById(req.params.bookId).populate('authors');
  
      if (!book) {
        return res.status(404).json({
          msg: 'Libro no encontrado',
        });
      }
  
      //responder ese libro
      return res.json(book);
    } catch (error) {
      res.status(500).json({
        msg: 'Error al buscar libro por id',
        error,
      });
    }
  };
  
  const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find({});
      if (!books) {
        return res.status(404).json({
          msg: 'Libros no encontrados',
        });
      }
      return res.json(books);
    } catch (error) {
      res.status(500).json({
        msg: 'Error al buscar todos los libros',
        error,
      });
    }
  };
  
  export { createGame, getBookById, getAllBooks };

