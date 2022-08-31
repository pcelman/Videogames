const  {Genre}  = require("../db.js");
const  {Router}  = require("express");
const axios = require("axios").default;
const router = Router();
const APIKEY = process.env.APIKEY

        

router.get('/', async (req,res) => {
    const getGenre = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
    const genre = await getGenre.data.results.map(e => e.name)
 
    genre.forEach(e => Genre.findOrCreate({ 
        where: {name: e} //
    }))

    const getAllGenre = await Genre.findAll() 
    res.json(getAllGenre)
})





module.exports = router;
