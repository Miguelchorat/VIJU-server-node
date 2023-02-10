const express = require("express")
const router = express.Router()
const reviewsController = require("../../controllers/reviewsController")

router.route("/")
        .get(reviewsController.getAllReviews)
//         .post(reviewsController.createOneReview)

// router.route("/:reviews")
//     .get(reviewsController.getOneReview)
//     .put(reviewsController.updateOneReview)
//     .delete(reviewsController.deleteOneReview)

module.exports.router = router