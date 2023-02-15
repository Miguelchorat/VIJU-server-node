const data = require("./reviews.json")
const dataGame = require("./games.json")
const dataUser = require("./users.json")

const fs = require("fs")

const getAllReviews = () => {
    let json = []
    
    Object.keys(data.reviews).forEach(function(review) {
        let result = getOneReview(review)
        json.push(result)
    });
    
    return json
}

const getAllReviewsWithSearch = (search) => {
    let json = []
    Object.keys(data.reviews).forEach(function(review) {
        let result = getOneReview(review)
        if(result.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
            json.push(result)
    });
    
    return json
}

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
    // updateOneReview,
    // deleteOneReview,
    insertReview
}