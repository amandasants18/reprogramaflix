const express = require('express')//importando o express
const app = express()// instanciando o express para acessar as funcionalidades

// //chamar as rotas
// const movies = require("./routes/moviesRoutes")
// //definir rota raiz
// app.use("/filmes", movies)


// // chamar as rotas

const series = require("./routes/seriesRoutes")

// // definir rota raiz 

app.use("/series", series)


module.exports = app