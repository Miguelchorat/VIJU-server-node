const express = require("express")
const router = express.Router()
const reviewsRoutes = require("./reviewsRoutes")
const gamesRoutes = require("./gamesRoutes")
const usersRoutes = require("./usersRoutes")
//Ruta de las diferentes opciones de la API sin la necesidad de autorización

router.use("/reviews", reviewsRoutes.router)
router.use("/games", gamesRoutes.router)
router.use("/users", usersRoutes.router)

router.get("/", (req, res, next) => {
  res.status(200).end();
})

module.exports.router = router