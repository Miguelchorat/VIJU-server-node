const reviewsModel = require("../database/reviewsModel")
const { v4: uuid } = require("uuid")

//Conecta el controlador con el modelo de reseñas

//Manda a pedir todas las reviews
const getAllReviews = () => {
    const allReviews = reviewsModel.getAllReviews()
    return allReviews;
}

//Manda a pedir todas las reviews que coincidan con la variable search
const getAllReviewsWithSearch = (search) => {
    const allReviews = reviewsModel.getAllReviewsWithSearch(search)
    return allReviews;
}

//Manda a pedir todas las reviews que coincidan con la variable search y pertenezcan al usuario de dicha id
const getAllReviewsWithSearchAndId = (search, id) => {
    const allReviews = reviewsModel.getAllReviewsWithSearchAndId(search, id)
    return allReviews;
}

//Manda a crear una reseña con la información que le llega
const createOneReview = (body) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const currentDate = `${year}-${month}-${day}`;

    const newReview = {
        "id": uuid(),
        ...body,
        "created_at": currentDate,
        "updated_at": currentDate
    };

    const review = reviewsModel.insertReview(newReview)
    if (!review) return false
    return review
}

//Manda a pedir una reseña que coincida con la id
const getOneReview = (id) => {
    const oneReview = reviewsModel.getOneReview(id)
    return oneReview;
}

//Manda a actualizar una reseña
const updateOneReview = (newReview) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const currentDate = `${year}-${month}-${day}`;

    console.log(newReview.id)
    const reviewMdf = reviewsModel.getOneReview(newReview.id)

    newReview = {
        ...newReview,
        "updated_at": currentDate
    };

    if (!reviewMdf) return false

    reviewsModel.updateOneReview(newReview);

    return reviewsModel.getOneReview(newReview.id) ? newReview : false
}

//Manda a eliminar una reseña
const deleteOneReview = (id) => {
    console.log(id)
    const review = reviewsModel.getOneReview(id)

    if (!review) return false

    reviewsModel.deleteOneReview(id);

    return reviewsModel.getOneReview(id) ? review : false
}

module.exports = {
    getAllReviews,
    getAllReviewsWithSearch,
    createOneReview,
    getOneReview,
    updateOneReview,
    deleteOneReview,
    getAllReviewsWithSearchAndId
}