const reviewsService = require("../services/reviewsServices")
//Controlador de las reviews

//Recoge todas las reviews del JSON 
const getAllReviews = ((req,res,next)=>{
    const allReviews = reviewsService.getAllReviews();

    if(allReviews){
        res.send(allReviews)
    }else{
        res.status(404).end()
    }
})

//Recoge todas las reviews del JSON dependiendo de lo que llegue en el search
const getAllReviewsWithSearch = ((req,res,next)=>{
    let search =req.params.search
    const allReviews = reviewsService.getAllReviewsWithSearch(search);

    if(allReviews){
        res.send(allReviews)
    }else{
        res.status(404).end()
    }
})

//Recoge todas las reviews del JSON dependiendo de lo que le llegue en el search y el id de usuario
const getAllReviewsWithSearchAndId = ((req,res,next)=>{
    let search = req.params.search
    let id = req.params.id
    const allReviews = reviewsService.getAllReviewsWithSearchAndId(search,id);

    if(allReviews){
        res.send(allReviews)
    }else{
        res.status(404).end()
    }
})

//Con el contenido que le llega mandará a crear una nueva review
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

//Pide una review dependiendo que coincida con el id llegado por parametro
const getOneReview = ((req,res,next)=>{
    let id =req.params.id
    const oneReview = reviewsService.getOneReview(id)
    if(oneReview){
        res.send(oneReview)
    }else{
        res.status(404).end()
    }
})

//Manda a actualizar una review con los datos que le llego por el cuerpo de la petición
const updateOneReview = ((req,res,next)=>{    
    let newReview = req.body
    const updateReview = reviewsService.updateOneReview(newReview);
    !updateReview ? res.status(400).end() : res.send('Review modificado').end()    
})

//Manda a eliminar la review con el id que llego por parametro
const deleteOneReview = (req, res, next) => {
    let id =req.params.id
  
    const deleteReview = reviewsService.deleteOneReview(id);
  
    deleteReview ? res.status(400).end() : res.send('Review borrado').end()
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