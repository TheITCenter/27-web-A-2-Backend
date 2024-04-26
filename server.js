import express from "express";
import {connect} from "./config.js";

connect();

const api = express();

api.use(express.json());

api.listen(8000, () => {
    console.log( "API corriendo en el puerto 8000" );
});

