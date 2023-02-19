const gamesService = require("../services/gamesServices")
//Controlador de los juegos

//Metodo para recibir todos los juegos en el JSON
const getAllGames = ((req,res,next)=>{
    const allGames = gamesService.getAllGames();

    if(allGames){
        res.send(allGames)
    }else{
        res.status(404).end()
    }
})

//Recibe un solo juego por su ID
const getOneGame = ((req,res,next)=>{
    let id =req.params.id
    const oneGame = gamesService.getOneGame(id)
    if(oneGame){
        res.send(oneGame)
    }else{
        res.status(404).end()
    }
})

module.exports = {
    getAllGames,
    getOneGame
}