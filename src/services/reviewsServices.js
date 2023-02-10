const reviewsModel = require("../database/reviewsModel")
const {v4: uuid} = require("uuid")

const getAllReviews = () => {
    const allReviews = reviewsModel.getAllReviews()
    return allReviews;
}

// const createOneReviews = (body) => {
//     const newReview = {
//         ...body,
//         "id": uuid(),
//         "fechaAlta": new Date().toLocaleDateString,
//         "fechaModificacion" : new Date().toLocaleTimeString
//     };
//     const review = reviewsModel.insertReview(newReview)
//     if(!review) return false
//     return review
// }

// const getOneProduct = (nombre) => {
//     const oneProduct = productosModelo.getOneProduct(nombre)
//     return oneProduct;
// }

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
    // createOneProduct,
    // getOneProduct,
    // updateOneProduct,
    // deleteOneProduct
}