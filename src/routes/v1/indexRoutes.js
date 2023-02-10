const express = require("express")
const router = express.Router()
const reviewsRoutes = require("./reviewsRoutes")

router.use("/reviews", reviewsRoutes.router)

router.get("/", (req, res, next)=>{
    res.send("Send reviews")
})

module.exports.router = router