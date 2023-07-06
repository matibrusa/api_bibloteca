const express = require ("express")
const app = express()
app.use (express.json())


const librosRouter = require ("./routes/libros")
const errorhandler = require ("./middlewares/errorhandler.js")


app.use ("/libros" , librosRouter)
app.use (errorhandler)

app.listen (3000, ()=> {
    console.log ("Servidor iniciado en el puerto 3000")
})