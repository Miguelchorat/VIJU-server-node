const gamesModel = require("../database/gamesModel")

const getAllGames = () => {
    const allGames = gamesModel.getAllGames()
    return allGames;
}

const getOneGame = (id) => {
    const oneGame = gamesModel.getOneGame(id)
    return oneGame;
}

module.exports = {
    getAllGames,
    getOneGame
}