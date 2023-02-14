const express = require("express")
const router = express.Router()
const reviewsRoutes = require("./reviewsRoutes")
const gamesRoutes = require("./gamesRoutes")

router.use("/reviews", reviewsRoutes.router)
router.use("/games", gamesRoutes.router)

router.get("/", (req, res, next)=>{
    res.send("Send reviews")
})

module.exports.router = router