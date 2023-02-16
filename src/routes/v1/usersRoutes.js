const express = require("express")
const router = express.Router()
const usersController = require("../../controllers/usersController")

router.route("/").post(usersController.createOneUser)

router.route("/email=:email")
    .get(usersController.checkEmail)

router.route("/id=:id")
    .get(usersController.getOneUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteOneUser)

router.route("/username=:username")
    .get(usersController.checkUsername)

module.exports.router = router