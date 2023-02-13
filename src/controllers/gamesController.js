const gamesService = require("../services/gamesServices")

const getAllGames = ((req,res,next)=>{
    const allGames = gamesService.getAllGames();

    if(allGames){
        res.send(allGames)
    }else{
        res.status(404).end()
    }
})

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