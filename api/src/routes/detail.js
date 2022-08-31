const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require("../db"); 
const axios = require("axios").default;
// const videogameRouter = require("./videogame.js")
// const genreRouter = require("./genre.js")
APIKEY="4186dc21f1d743a3ba0a8382fd10d843"

router.get('/videogames/:id', async (req, res) =>{
    const {id} = req.params;
    try{
if(!id.includes('-')){
        let allVideogames = await getAllVideogames(); 
    
        let idGame = await allVideogames.filter(e => e.id === parseInt(id));
    
        if(idGame.length > 0){
            const detalle = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
            const description = detalle.data.description_raw;
            idGame[0]['description'] = description;
            res.status(200).send(idGame)
        }
    }else {
        let gameFound = await Videogame.findByPk(id, {
            include: [{
                model: Genre,
                attributes: ['name'],
                through : {
                    attributes: [],
                }
            }]
        })
        var arreglo = []
        arreglo.push(gameFound)

        res.status(200).json(arreglo)
    }
    }catch(error){
        res.status(404).send(error)
    }
})