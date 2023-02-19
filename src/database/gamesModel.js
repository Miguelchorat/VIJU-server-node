const data = require("./games.json")

//Modelo de juego que se conecta con el JSON

//Recoge del JSON todos los juegos
const getAllGames = () => {
    return data.games
}

//Recoge del JSON el juego que coincida con la id
const getOneGame = (id) => {
    const oneGame = data.games[id]
    return oneGame;
}

module.exports = {
    getAllGames,
    getOneGame
}