const express = require("express")
const router = express.Router()
const reviewsRoutes = require("./reviewsRoutes")
const gamesRoutes = require("./gamesRoutes")
const usersRoutes = require("./usersRoutes")

//Rutas de las diferentes opciones de la API que requiere autorización
router.use("/reviews", reviewsRoutes.router)
router.use("/games", gamesRoutes.router)
router.use("/users", usersRoutes.router)

router.get("/", (req, res, next)=>{
    res.send("Correcto")
})

module.exports.router = router