const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require("../db");
const axios = require("axios").default;
const { Op } = require("sequelize")
const APIKEY = process.env.APIKEY
const API = "https://api.rawg.io/api/games/"
// const APIKEY="4186dc21f1d743a3ba0a8382fd10d843"

const getId = async(id)=>{
    id = parseInt(id)
    if((id.includes('-'))){
        //let videogameDb = [];
        let getDbid = await Videogame.findAll({
            where : id = id
        })
        let videogameDb = getDbid.map((e)=>{
            return{
                id: e.id,
                name: e.name,
                description: e.description,
                date: e.date,
                rating: e.rating,
                plataforms: e.plataforms
            }
        }) 
        return videogameDb

    }else{
        let get = await axios.get(`https://api.rawg.io/api/games/${id}${APIKEY}`)
        let data = await get.data
        let results = {
            id:   data.id,
            name: data.name,
            image: data.background_image,
            genre: data.genres.map((e) => e.name),
            description: (data.description),
            released: data.released,
            rating: data.rating,
            plataforms: data.platforms.map((e)=> e.platform.name)
            }
        return results
    }
}

module.exports = getId