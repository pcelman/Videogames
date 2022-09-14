const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require("../db"); 
const axios = require("axios").default;
const { APIKEY } = process.env;
const getAll = require("../controllers/getAll")



router.get('/', async (req,res) =>{

    const name = req.query.name 
    let allGames = await getAll();
    try {
    
    if(name){
        let videoName = await allGames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        videoName.length ? 
        res.status(200).send(videoName) :
        res.status(200).send('otra cosa');
        console.log(videoName)
    }else{
        res.status(200).send(allGames)
    }} catch (error){ console.log (error)}
})


router.post("/", async (req, res) => {
    const {name, description, released, rating, platforms, image, genre} = req.body;
    try {
        if (!name || !description || !genre ) {
                   return res.status(400).send("Name, description and genre required");
              }

        const videoDb = await Videogame.findAll({ where: { name: name } });
            if (videoDb.length != 0) {
            return res.send("Name already exists");}

       const newGame = await Videogame.create({
         name, description, rating, released, image, platforms: platforms, createdInDb: true
        })                     
        console.log(newGame)
  
     const genreDb = await Genre.findAll({
       where: {name: genre}
      })
      console.log(genreDb)
      newGame.addGenre(genreDb)
     res.status(200).send("DONE!")
  
   } catch(error) {
      console.log(error)
     res.status(400).send("Something went wrong")
   }
  }) 


router.get('/:id', async (req, res) =>{
  const {id} = req.params;
  try{
if(!id.includes('-')){
      let getAllGames = await getAll(); 
  
      let oneGame = getAllGames.filter(e => e.id === parseInt(id));
  
      if(oneGame.length > 0){
          const detalle = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
          const description = detalle.data.description_raw;
          oneGame[0]['description'] = description;
          res.status(200).send(oneGame)
      }
  }else {
      let theGame = await Videogame.findByPk(id, {
          include: [{
              model: Genre,
              attributes: ['name'],
              through : {
                  attributes: [],
              }
          }]
      })
      var arreglo = []
      arreglo.push(theGame)

      res.status(200).json(arreglo)
  }
  }catch(error){
      res.status(404).send(error)
  }
})




module.exports = router;