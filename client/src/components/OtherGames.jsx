import React, { useState, useEffect } from "react";
import { getGenre, getVideogames } from "../actions/index"; 
import { useDispatch, useSelector } from "react-redux";
import "../styles/otherGames.css"
import Snippets from "./Snippets"





export default function OtherGames({unGenero}){
    const dispatch = useDispatch()
    const genre = useSelector((state) => state.genre)
    const videogames = useSelector(state=>state.videogames)
    const generoDetalle = useSelector(state=>state.generoDetalle)


    useEffect(()=>{
        dispatch(getGenre())
        dispatch(getVideogames())
    },[dispatch]) 


   const genreFiltered = videogames.filter((e)=>e.unGenero)
return (
<div>

    <div className="titulo-otherGames">Other videogames you might be interested in:</div>
    {genreFiltered?.map((e)=>
        
            <div className="container-otherGames"> 
            <Snippets onMouseOver={{scale:1.4}} key={e.id} name={e.name}image={e.image}/>
            <div></div>
            </div>
        )
        }
        
        </div>
        )
    }