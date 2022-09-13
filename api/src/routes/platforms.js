const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require("../db"); 
const axios = require("axios").default;


router.get("./", async (req, res) => {
	
		try {
			const allPlatformsRaw = [];
			response.data.forEach((game) => {
				game.platforms.forEach((platform) => {
					allPlatformsRaw.push(platform);
				});
			});
			let hash = {};
			const allPlatforms = allPlatformsRaw.filter((o) => (hash[o.id] ? false : (hash[o.id] = true)));


		} catch (error) {
			console.log(error);
		}
	}
)