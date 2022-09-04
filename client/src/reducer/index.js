const initialState = {
    videogames: [],
    videogamesFilter: [],
    genre: [],
    detail: [],
    currentPage: []
}


function rootReducer (state = initialState, action){
switch(action.type){

    case "GET_VIDEOGAMES":  
    return  {
        ...state,
        videogames: action.payload,
        videogamesFilter: action.payload //cuando trae los v, hace dos copias
    }

    case "GET_GENRE":
        return {
            ...state,
            genre: action.payload
        }

    case "GET_DETAIL":
        return{
            ...state,
            detail: action.payload
            }
    case "CLEAN_FILTER":
            return {
            ...state,
            detail: action.payload,
            videogames: action.payload
            }
    case "POST_VIDEOGAME": 
            return{
            ...state,
            }
                
    case "GET_NAME_VIDEOGAMES":
    // response === "unavailable" ? "hacé esto" :
        return {
            ...state,
            videogamesFilter: action.payload 
        }

    case "FILTER_BY_GENRE"://la logica va antes del return en el reducer
        const allV = state.videogames
        const filterAllV = action.payload === "All"? allV: 
        allV.filter(e => e.genre.map((e) => e.name).includes(action.payload))
        return {
                    ...state,
                    videogamesFilter: filterAllV
                    
              }  
case "FILTER_CREATED": 

    var filterCreated; 
    if (action.payload === "all"){
        filterCreated = state.videogames
    }
    else if (action.payload === "api"){
        filterCreated = state.videogames.filter(e => !e.createdInDb)
    }
    else if (action.payload === "db"){
        filterCreated = state.videogames.filter(e => e.createdInDb)
    }
    return{
        ...state,
        videogamesFilter: filterCreated
       }

case "ORDER_BY_NAME":
        var uno = [...state.videogamesFilter]
        action.payload === "asc"? uno.sort(function(a,b){
            if(a.name.toLowerCase() > b.name.toLowerCase()){
             return 1
            }
            if(b.name.toLowerCase() > a.name.toLowerCase()){
             return -1
            }
            return 0
         }):
         uno.sort(function(a,b){
           if(a.name.toLowerCase() > b.name.toLowerCase()){
             return -1
            }
            if(b.name.toLowerCase() > a.name.toLowerCase()){
             return 1
            }
            return 0
         })
         return {
           ...state,
           videogamesFilter:uno
           }
    case "ORDER_BY_RATING":
 
        let sortedArr1 = action.payload === 'ratingMin' ?
            state.videogamesFilter.sort(function(a,b){
                if (a.Rating > b.Rating){
                    return 1;
                    }
                if (b.Rating > a.Rating){
                    return -1;
                    }
                return 0;
            }):
            state.videogamesFilter.sort(function(a,b){
                if (a.Rating > b.Rating){
                    return -1;
                    }
                if (b.Rating > a.Rating){
                    return 1;
                    }
                return 0;
                })
            return {
                ...state,
                videogamesFilter: sortedArr1
            }

default: return state;
}
}


export default rootReducer
