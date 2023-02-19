const express = require("express")
const router = express.Router()
const gamesController = require("../../../controllers/gamesController")
//Rutas de juegos

router.route("/").get(gamesController.getAllGames)

router.route("/:id")
    .get(gamesController.getOneGame)

module.exports.router = router