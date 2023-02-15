const express = require("express")
const router = express.Router()
const reviewsController = require("../../controllers/reviewsController")

router.route("/")
        .get(reviewsController.getAllReviews)
        .post(reviewsController.createOneReview)

router.route("/search=:search")
        .get(reviewsController.getAllReviewsWithSearch)

router.route("/:id")
     .get(reviewsController.getOneReview)

module.exports.router = router