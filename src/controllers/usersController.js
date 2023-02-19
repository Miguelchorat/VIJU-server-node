const usersService = require("../services/usersServices")
//Controlador de los usuarios

//MAnda a crear un usuario con el contenido que le llego en el cuerpo de la petición
const createOneUser = ((req,res,next)=>{
    const {body} = req
    if(!body.username || !body.email  || !body.password || !body.date ){
        res.status(400).end()
    }else{
        const newUser = {
            "username" : body.username,
            "email": body.email,
            "password": body.password,
            "date": body.date
        }
        const message = usersService.createOneUser(newUser);
        if(message) res.status(200).send(message);
        else res.status(406).end();
    }    
})

//Manda a actualizar el usuario con el contenido que le llego por el cuerpo de la petición
const updateUser = ((req,res,next)=>{
    let newUser = req.body
    const userUpdate = usersService.updateUser(newUser)
    if(!userUpdate){
        res.status(400).send({message: 'El usuario no se actualizo'})
    }
    else{
        res.send(userUpdate).end()
        res.locals.message = "OK"
    }    
})

//Manda a borra el usuario que coincida con el id que llego por parametro
const deleteOneUser = ((req,res,next)=>{
    let id = req.params.id

    const deletedUser = usersService.deleteOneUser(id)

    if(!deletedUser){
        res.status(400).send({message: "El usuario no ha sido eliminado"}).end()
        res.locals.message = "Error"
    } else {
        res.send(deletedUser).end()
        res.locals.message = "OK"
    }
    next()
})

//Manda a eliminar la sessión del usuario 
const deleteSession = ((req,res,next)=>{
    let id = req.params.id

    const deleteSession = usersService.deleteSession(id)
    if(!deleteSession){
        res.status(400).send({message: "La sesión no fue eliminada"}).end()
        res.locals.message = "Error"
    } else {
        res.send(deleteSession).end()
        res.locals.message = "OK"
    }
    next()
})

//Manda a pedir un usuario que coincida con el id que le llega por parametro
const getOneUser = ((req,res,next)=>{
    let id = req.params.id
    const oneUser = usersService.getOneUser(id)
    if(oneUser)
        res.send(oneUser)
    else
        res.status(404).end()
})

//Pide un usuario que coincida con el correo que le llega por el cuerpo 
const getOneUserLogin = ((req,res,next)=>{
    let email = req.body.email
    let id = usersService.checkEmail(email)
    const oneUser = usersService.getOneUser(id)
    if(oneUser)
        res.send(oneUser.id)
    else
        res.status(404).end()
})

//Pide que chequee si el correo que le llega por parametro existe
const checkEmail = ((req,res,next)=>{
    const email = req.params.email
    if(!email){
        res.status(400).end()
    }
    else{
        res.send(!!usersService.checkEmail(email))
    }
})

//Pide que cheque si el nombre de usuario que le llega por parametro existe
const checkUsername = ((req,res,next)=>{
    const username = req.params.username
    if(!username){
        res.status(400).end()
    }
    else{
        res.send(usersService.checkUsername(username))
    }
})

module.exports = {
    createOneUser,
    checkEmail,
    checkUsername,
    updateUser,
    deleteOneUser,
    getOneUser,
    deleteSession,
    getOneUserLogin
}