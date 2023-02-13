const data = require("./games.json")

const getAllGames = () => {
    return data.games
}

const getOneGame = (id) => {
    const oneGame = data.games[id]
    return oneGame;
}

module.exports = {
    getAllGames,
    getOneGame
}