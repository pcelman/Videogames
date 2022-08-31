const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require("../db"); 
const axios = require("axios").default;
const videogameRouter = require("./videogame.js")
const genreRouter = require("./genre.js")




router.use("/videogame", videogameRouter)
router.use("/genre", genreRouter)




module.exports = router;









// const apiKey = "4186dc21f1d743a3ba0a8382fd10d843"
// `https://api.rawg.io/api/games?key=${apiKey}`
// `https://api.rawg.io/api/games?key=4186dc21f1d743a3ba0a8382fd10d843`
// let searchGame= `https://api.rawg.io/api/games?search={game}?key=4186dc21f1d743a3ba0a8382fd10d843`
// let genres= `https://api.rawg.io/api/genres?key=4186dc21f1d743a3ba0a8382fd10d843`
// let buscarId= `https://api.rawg.io/api/games/{id}?key=4186dc21f1d743a3ba0a8382fd10d843`

//https://api.rawg.io/api/games/5286?key=4186dc21f1d743a3ba0a8382fd10d843








// router.get('/platforms', async (req, res)=> {
//     const apiURL3 = await axios.get(`https://api.rawg.io/api/platforms?key=${APIKEY}`)    
//     const apiPlatf = await apiURL3.data.results.map(el => el.name)
//     apiPlatf.forEach( el => {
//         Platform.findOrCreate({
//             where : {
//                 name: el    
//             }
//         })
//     });
//     const allPlatf = await Platform.findAll();
//     res.status(200).send(allPlatf)
// })






