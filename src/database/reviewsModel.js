const data = require("./reviews.json")
const dataGame = require("./games.json")
const dataUser = require("./users.json")
const fs = require("fs")
//Modelo de reseña que se conecta con el JSON

//Recoge del JSON todas las reseñas
const getAllReviews = () => {
    let json = []
    
    Object.keys(data.reviews).forEach(function(review) {
        let result = getOneReview(review)
        json.push(result)
    });
    
    return json
}

//Recoge del JSON todas las reseñas que incluyan el contenido de la variable search
const getAllReviewsWithSearch = (search) => {
    let json = []
    Object.keys(data.reviews).forEach(function(review) {
        let result = getOneReview(review)
        if(result.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
            json.push(result)
    });
    
    return json
}

//Recoge del JSON todas las reseñas que incluyan el contenido de la variable search y el id coincidan con el id del usuario de la reseña
const getAllReviewsWithSearchAndId = (search,id) => {
    let json = []
    Object.keys(data.reviews).forEach(function(review) {
        let result = getOneReview(review)
        if((search === '-all' || result.title.toLowerCase().indexOf(search.toLowerCase())) !== -1 && result.user === id)
            json.push(result)
    });
    
    return json
}

//Recoge del JSON la reseña que coincida con la id
const getOneReview = (id) => {
    const oneReview = data.reviews[id]
    const oneGame = dataGame.games[oneReview.videogame]
    const user = dataUser.users[oneReview.user]
    const result = {
        ...oneReview,
        name: oneGame['name'],
        image: oneGame['image'],
        username: user['username']        
    }

    return result
}

//Elimina del JSON la reseña que coincida con la id
const deleteOneReview = (id) => {
    delete data.reviews[id];
    
    fs.writeFileSync(
      "./src/database/reviews.json",
      JSON.stringify(data, null, 2),
      "utf8"
    )
}

//Actualiza del JSON la reseña que le llega
const updateOneReview = (newReview) => {
    const review = data.reviews[newReview.id]
    if (!review) return false

    review.title = newReview.title
    review.score = newReview.score
    review.videogame = newReview.videogame
    review.message = newReview.message
    review.updated_at = newReview.updated_at

    data.reviews[newReview.id] = review
    fs.writeFileSync(
        "./src/database/reviews.json",
        JSON.stringify(data, null, 2),
        "utf8"
    );

    return newReview
}

//Introduce una nueva reseña en el JSON
const insertReview = (review) => {
    const id = review.id
    data.reviews[id] = review

    fs.writeFileSync(
        "./src/database/reviews.json",
        JSON.stringify(data, null, 2),
        "utf8"
    );

    return review;
}

module.exports = {
    getAllReviews,
    getAllReviewsWithSearch,
    getOneReview,    
    updateOneReview,
    deleteOneReview,
    insertReview,
    getAllReviewsWithSearchAndId
}