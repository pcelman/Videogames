import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/videogame");
    await dispatch({
      type: "GET_VIDEOGAMES",
      payload: json.data,
    });
  };
}

export function getGenre() {
  return async function (dispatch) {
    try {
      var info = await axios.get("http://localhost:3001/genre", {});
      return dispatch({ type: "GET_GENRE", payload: info.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPlatforms() {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/videogame");
    const allPlatformsRaw = [];
    response.data.forEach((game) => {
      game.platforms.forEach((platform) => {
        allPlatformsRaw.push(platform);
      });
    });
    const uniquePlatforms = new Set(allPlatformsRaw);
    console.log(uniquePlatforms);

    let arrayPlatforms = [...uniquePlatforms];

    console.log(arrayPlatforms);
    return dispatch({
      type: "GET_PLATFORMS",
      payload: arrayPlatforms,
    });
  };
}

// const platformsLoaded = (platforms) => ({
// 	type: types.platformsLoaded,
// 	payload: platforms,
// });

// http://localhost:3001/videogame/4291
export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/videogame/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanFilter() {
  return {
    type: "CLEAN_FILTER",
    payload: [],
  };
}

export function postVideogame(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/videogame",
      payload
    );
    console.log(response);
    return response;
  };
}

export function getNameVideogames(name) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/videogame?name=${name}`);
    console.log(json);
    if (json.data === "otra cosa")
      return dispatch({
        type: "NO_NAME",
        payload: json.data,
      });

    return dispatch({
      type: "GET_NAME_VIDEOGAMES",
      payload: json.data,
    });
  };
}

export function filterByGenre(payload) {
  return {
    type: "FILTER_BY_GENRE",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByDefault(payload) {
  return {
    type: "ORDER_BY_DEFAULT",
    payload,
  };
}
export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByRating(payload) {
  return {
    type: "ORDER_BY_RATING",
    payload,
  };
}

export function savePage(payload) {
  return function (dispatch) {
    return dispatch({
      type: "SAVE_PAGE",
      payload,
    });
  };
}
//     filterByPage
//     export function filterByPage(payload) {
//         return {
//             type: "FILTER_BY_PAGE",
//             payload
//         };
// };
