const initialState = {
    videogames: [],
    videogamesFilter: [],
    genre: [],
    detail: []
}


function rootReducer (state = initialState, action){
switch(action.type){

    case "GET_VIDEOGAMES":  
    return  {
        ...state,
        videogames: action.payload,
        videogamesFilter: action.payload
    }

    case "GET_GENRE":
        return {
            ...state,
            genre: action.payload
        }




default: return state;
}
}


export default rootReducer
