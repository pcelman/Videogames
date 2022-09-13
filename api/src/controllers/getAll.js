const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require("../db"); 
const axios = require("axios").default;
const { APIKEY } = process.env;



const gamesApi = async () => {
  try {
    const getGames = [];
    let numeroPagina = 1
    while (numeroPagina <= 5) {
        let api = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}&page=${numeroPagina}`)
        api.data.results.map(e => {
            getGames.push( {
                id : e.id,
                name: e.name,
                image: e.background_image,
                genres: e.genres.map(e => {
                  return { 
                    name: e.name 
                  }}),
                // .join().split(","),
                released: e.released,
                rating: e.rating,
                platforms: e.platforms.map((e) => e.platform.name).join().split(",")
            })
        })
        numeroPagina ++
      }

    return getGames;
  } catch (error){
    console.log(error)
  }

}



const gamesDb = async () => {
    const vgDb = await Videogame.findAll({
      include: {
        model: Genre,
        attribute: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return vgDb;
  };

  
const getAll = async () =>{
    const apiGames = await gamesApi();
    const dbGames = await gamesDb();
    const all = apiGames.concat(dbGames);
    return all;
}

module.exports = getAll