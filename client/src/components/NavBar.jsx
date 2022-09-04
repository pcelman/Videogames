import React from "react";
import  { useDispatch, useSelector } from "react-redux";
import { filterVideogames, filterCreated, orderByName, orderByRating, getGenre, getVideogames, cleanFilter, filterByGenre } from "../actions/index.js"
import SearchBar from "./SearchBar"
// import "../styles/navBar.css"

export default function NavBar({setCurrentPage, setOrder}){


const dispatch = useDispatch()
const videogamesFilter = useSelector ((state) => state.videogamesFilter)



function handleClick(e){
    e.preventDefault();
    dispatch(cleanFilter());
    dispatch(getVideogames());
    dispatch(getGenre());

            }

            
            function handleFilterCreated(e){
                dispatch(filterCreated(e.target.value))
                setCurrentPage(1)
            }
            
            
            function handleSort(e){
                dispatch(orderByName(e.target.value))
                setCurrentPage(1)
                setOrder(`Ordenado ${e.target.value}`)
            }
            
            function handleRatingSort(e){
                dispatch(orderByRating(e.target.value))
                setCurrentPage(1)
                setOrder(`Ordenado ${e.target.value}`)
            }

            function handleFilterGenre(e){
                dispatch(filterByGenre(e.target.value))
                setCurrentPage(1)
            }

            return (
                <div className="general-navBar">

        
        
        <button onClick = {e => {handleClick(e)}}> RELOAD </button>

        <div className = "filtros">
            <select onChange={e=>handleSort(e)}>
                 <option >Order alphabetically</option>
                <option value='asc'>Order by: A-Z</option>
                <option value='desc'>Order by: Z-A</option>
                </select>

                <select onChange={e=>handleRatingSort(e)}>
                <option value='all'>Sort by RATING</option>
                <option value='ratingMin'>Sort by: Min Rating</option>
                <option value='ratingMax'>Sort by: Max Rating</option>
                </select>

            <select onChange={e=>handleFilterCreated(e)}>
                <option value = "all">Original/Custom</option>
                <option value = "api">Original Videogames</option>
                <option value = "db">Custom Videogames</option>
               
            </select>
          
            <select onChange={e=>handleFilterGenre(e)}>
                <option value = "all">sort by Genre</option>
                <option value = "Action">Action</option>
                <option value = "Adventure">Adventure</option>
                <option value = "Arcade">Arcade</option>
                <option value = "Board Games">Board Games </option>
                <option value = "Card">Card</option>
                <option value = "Casual">Casual </option>
                <option value = "Educational">Educational </option>
                <option value = "Family">Family </option>
                <option value = "Fighting">Fighting </option>
                <option value = "Indie">Indie </option>
                <option value = "Massively Multiplayer">Multiplayer </option>
                <option value = "Platformer">Platformer </option>
                <option value = "Puzzle">Puzzle </option>
                <option value = "Racing">Racing </option>
                <option value = "RPG">RPG </option>
                <option value = "Shooter">Shooter </option>
                <option value = "Simulation">Simulation </option>
                <option value = "Sports">Sports </option>
                <option value = "Strategy">Strategy </option>
   
            </select>

            <div className="SearchBar">
            <SearchBar/>
            </div>
 </div>
           
        </div>
       
       
    )
}

