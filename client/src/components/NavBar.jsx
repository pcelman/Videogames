import React from "react";
import  { useDispatch, useSelector } from "react-redux";
import { filterByGenre, filterCreated, orderByName, orderByRating, getGenre, getVideogames, cleanFilter } from "../actions/index.js"
import SearchBar from "./SearchBar"
// import "../styles/navBar.css"

export default function NavBar({setCurrentPage, setOrder}){


const dispatch = useDispatch()
const videogamesFilter = useSelector ((state) => state.videogamesFilter)
const genre = useSelector ((state) => state.genre.sort((a, b)=> { if(a.name > b.name){ return 1 }
if(a.name < b.name){return -1}
return 0}))




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

            function handleFilterByGenre(e){
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
          
            <select onChange={e=>handleFilterByGenre(e)}> {genre.map((e) => (  <option value={e.name}>{e.name}</option> ))}
                   </select>

            <div className="SearchBar">
            <SearchBar/>
            </div>
 </div>
           
        </div>
       
       
    )
}

