const express = require("express")
const router = express.Router()
const reviewsController = require("../../../controllers/reviewsController")

//Rutas para las reseñas
router.route("/")
        .get(reviewsController.getAllReviews)
        .post(reviewsController.createOneReview)

router.route("/search=:search/id=:id")
        .get(reviewsController.getAllReviewsWithSearchAndId)

router.route("/:id")
        .get(reviewsController.getOneReview)
        .put(reviewsController.updateOneReview)
        .delete(reviewsController.deleteOneReview)

module.exports.router = router