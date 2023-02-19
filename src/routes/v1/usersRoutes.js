const express = require("express")
const router = express.Router()
const usersController = require("../../controllers/usersController")

//Ruta de los usuarios
router.route("/").post(usersController.createOneUser)

router.route("/id=:id")
    .get(usersController.getOneUser)

router.route("/email=:email")
    .get(usersController.checkEmail)

router.route("/username=:username")
    .get(usersController.checkUsername)

module.exports.router = router
