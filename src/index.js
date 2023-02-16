const cors = require("cors")
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const routesAuthV1 = require("./routes/v1/auth/indexRoutes")
const routesV1 = require("./routes/v1/indexRoutes")
const auth = require("./utils/authorization")
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use("/api/v1", routesV1.router)
app.use("/api/v1/auth", auth.authenticateUser, routesAuthV1.router)

app.use((err, req, res, next) => {
    console.error("ERROR:" + err.stack);
    res.end();
})

app.listen(PORT, () => {
    console.log("\x1b[41m%s\x1b[0m",
        '[START] Se inicia el servidor en ' + PORT)
})