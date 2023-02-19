const gamesModel = require("../database/gamesModel")

//Conecta el controlador con el modelo de juegos

//Recibe todos los juegos
const getAllGames = () => {
    const allGames = gamesModel.getAllGames()
    return allGames;
}

//Recibe un juego por el id
const getOneGame = (id) => {
    const oneGame = gamesModel.getOneGame(id)
    return oneGame;
}

module.exports = {
    getAllGames,
    getOneGame
}