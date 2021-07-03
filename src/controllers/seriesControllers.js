const { response } = require("express")
const series = require("../models/series.json")

const home = (request,response) =>{
    response.status(200).send(
        {
            "message": "Olá pessoa, seja bem vinda ao {reprograma}flix - versão série :3 "
        }
    )
}

const getAll = (request,res) => {
    response.status(200).send(serie)
}

const getById = (request,response) => {

    const filtedId = request.params.id.toLowerCase()
    const filterSerie = series.find(serie => serie.id == filtedId)
    response.status(200).send(filterSerie)

}

const getByTitle = (req,res) => {
    const reqTitle = req.query.title.toLowerCase()

    const filterTitle = series.find(series => series.title.toLowerCase().includes(reqTitle))

    if(filterTitle == "" || filterTitle == undefined){
        res.status(404).send({
            "message": "Por favor, insira um título válido."
        })
    }else{
        res.status(200).send(filterTitle)
    }
}

const getByGenero = (request, response) => {
//acessar o genero requisitado
 const requestGenero = request.query.genre;

 //criando lista

 var seriesList = []

 series.forEach(seriess => {

    let genreList = seriess.genre



    for(genre of genreList){
        
        if(genre.includes(requestGenero)){

            seriesList.push(seriess)
   
        
        }
    }

 })

 response.status(200).send(seriesList)
}

module.exports = {home, getAll, getById, getByTitle, getByGenero}

