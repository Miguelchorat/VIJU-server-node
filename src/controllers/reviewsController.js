const reviewsService = require("../services/reviewsServices")

const getAllReviews = ((req,res,next)=>{
    const allReviews = reviewsService.getAllReviews();

    if(allReviews){
        res.send(allReviews)
    }else{
        res.status(404).end()
    }
})

const getAllReviewsWithSearch = ((req,res,next)=>{
    let search =req.params.search
    const allReviews = reviewsService.getAllReviewsWithSearch(search);

    if(allReviews){
        res.send(allReviews)
    }else{
        res.status(404).end()
    }
})

const createOneReview = ((req,res,next)=>{
    const {body} = req
    if(!body.title || !body.message  || !body.videogame || !body.user || !body.score ){
        res.status(400).end()
    }else{
        const newReview = {
            "title" : body.title,
            "message": body.message,
            "videogame": body.videogame,
            "user": body.user,
            "score": body.score,
        }
        const message = reviewsService.createOneReview(newReview);
        if(message) res.status(200).send(message);
        else res.status(406).end();
    }
        
    res.end()
})

const getOneReview = ((req,res,next)=>{
    let id =req.params.id
    const oneReview = reviewsService.getOneReview(id)
    if(oneReview){
        res.send(oneReview)
    }else{
        res.status(404).end()
    }
})

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
    getAllReviewsWithSearch,
    createOneReview,
    getOneReview,
    // updateOneReview,
    // deleteOneReview
}