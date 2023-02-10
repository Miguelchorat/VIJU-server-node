const cors = require("cors")
const express = require("express")
const app = express()
const routesV1 = require("./routes/v1/indexRoutes")
//const auth = require("/utils/authorization")

app.use(express.json())
//app.use(auth.checkUser)
app.use(cors())
app.use("/api/v1", routesV1.router)


const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log("\x1b[41m%s\x1b[0m", 
    '[START] Se inicia el servidor en '+PORT)
})