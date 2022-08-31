import axios from "axios"

export function getVideogames(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/videogame");
        await dispatch({
            type: "GET_VIDEOGAMES",
            payload: json.data
        })
    }
}

export function getGenre(){
    return async function (dispatch) {
        var info = await axios.get ("http://localhost:3001/genre", {
        })
        return dispatch({ type: "GET_GENRE", payload: info.data})
    }
}



