const reviewsModel = require("../database/reviewsModel")
const { v4: uuid } = require("uuid")

const getAllReviews = () => {
    const allReviews = reviewsModel.getAllReviews()
    return allReviews;
}

const getAllReviewsWithSearch = (search) => {
    const allReviews = reviewsModel.getAllReviewsWithSearch(search)
    return allReviews;
}

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

const getOneReview = (id) => {
    const oneReview = reviewsModel.getOneReview(id)
    return oneReview;
}

// const updateOneProduct = (producto) => {
//     const productoMdf = productosModelo.getOneProduct(producto.nombre)

//     if (!productoMdf) return false

//     productosModelo.updateOneProduct(producto);

//     return productosModelo.getOneProduct(producto.nombre) ? producto : false  
// }

// const deleteOneProduct = (nombre) => {
//   const producto = productosModelo.getOneProduct(nombre)

//   if (!producto) return false

//   productosModelo.deleteOneProduct(nombre);

//   return productosModelo.getOneProduct(nombre) ? producto : false    
// }

module.exports = {
    getAllReviews,
    getAllReviewsWithSearch,
    createOneReview,
    getOneReview,
    // updateOneProduct,
    // deleteOneProduct
}