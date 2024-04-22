import express from "express";

const api = express(8000, () => {
    console.log("Server is running on port 8000");
})