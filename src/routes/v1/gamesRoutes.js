const express = require("express")
const router = express.Router()
const gamesController = require("../../controllers/gamesController")

//Ruta de los videojuegos
router.route("/").get(gamesController.getAllGames)

router.route("/:id")
    .get(gamesController.getOneGame)

module.exports.router = router