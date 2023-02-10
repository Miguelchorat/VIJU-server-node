const reviewsService = require("../services/reviewsServices")

const getAllReviews = ((req,res,next)=>{
    const allReviews = reviewsService.getAllReviews();

    if(allReviews){
        res.send(allReviews)
    }else{
        res.status(404).end()
    }
})

// const createOneProduct = ((req,res,next)=>{
//     const {body} = req
//     console.log(body)
//     if(!body.nombre || !body.precio  || !body.categoria ){
//         res.status(400).end()
//     }else{
//         const newProduct = {
//             "nombre" : body.nombre,
//             "precio": body.precio,
//             "categoria": body.categoria
//         }
//         const createdProduct = productosService.createOneProduct(newProduct);
//         if(createdProduct) res.status(200).send(createdProduct);
//         else res.status(406).end();
//     }
        
//     res.end()
// })

// const getOneProduct = ((req,res,next)=>{
//     let product =req.params.producto
//     const oneProduct = productosService.getOneProduct(product)
//     if(oneProduct){
//         res.send(oneProduct)
//     }else{
//         res.status(404).end()
//     }
// })

// const updateOneProduct = ((req,res,next)=>{    
//     const {body} = req

//     if(!body.nombre || !body.precio  || !body.categoria ){
//         res.status(400).end()
//     }
  
//     const modificarProducto = productosService.updateOneProduct(body);
  
//     !modificarProducto ? res.status(400).end() : res.send('Producto modificado').end()
// })

// const deleteOneProduct = (req, res, next) => {
//     let producto =req.params.producto
  
//     const borrarProducto = productosService.deleteOneProduct(producto);
  
//     borrarProducto ? res.status(400).end() : res.send('Producto borrado').end()
// }

module.exports = {
    getAllReviews,
    // createOneReview,
    // getOneReview,
    // updateOneReview,
    // deleteOneReview
}