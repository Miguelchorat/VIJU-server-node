const data = require("./reviews.json")
const fs = require("fs")

const getAllReviews = () => {
    return data.reviews
}
// const getOneProduct = (nombre) => {
//     const oneProduct = datos.productos[nombre]
//     return oneProduct;
// }

// const deleteOneProduct = (nombre) => {
//     delete datos.productos[nombre];
    
//     fs.writeFileSync(
//       "./src/database/productos.json",
//       JSON.stringify(datos, null, 2),
//       "utf8"
//     );
// };

// const updateOneProduct = (producto) => {
//     datos.productos[producto.nombre] = producto

//     fs.writeFileSync(
//       "./src/database/productos.json",
//       JSON.stringify(datos, null, 2),
//       "utf8"
//     );
// }

// const insertProduct = (producto) => {
//     const nombre = producto.nombre
//     datos.productos[nombre] = producto

//     fs.writeFileSync(
//         "./src/database/productos.json",
//         JSON.stringify(datos, null, 2),
//         "utf8"
//     );

//     return producto;
// }
module.exports = {
    getAllReviews,
    // getOneReview,
    // updateOneReview,
    // deleteOneReview,
    // insertReview
}