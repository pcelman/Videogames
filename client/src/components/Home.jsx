import React from "react";
import {useState, useEffect} from "react"
import  { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenre } from "../actions/index.js"
import { Link } from "react-router-dom"
import  Card  from "./Card"
// import Paginado from "./Paginado"
// import NavBar from "./NavBar"
// import "../styles/home.css"
import gif from "./loading.gif"


export default function Home(){

    const dispatch = useDispatch()
    const videogamesFilter = useSelector ((state) => state.videogamesFilter)
    const videogames = useSelector ((state) => state.videogames)




    useEffect(()=>{
        dispatch(getGenre())
        dispatch(getVideogames())
    },[dispatch]) 





    return (
<div className="container-home">
       
   

        <div className="boton-y-titulo">
        
        <h1 className="titulo-home">Videogames</h1>
        </div>
          
<div className="div-cards">


        {videogames?.map((e) =>{ 
            return (
                <div >
                    <Link to ={"/videogame/" + e.id}> 
                        <Card key= {e.id} name = {e.name} image= {e.image} genre= {e.genre} rating= {e.rating}/>
                    </Link>
                 </div>
           );
        })}      
</div>
      
        {videogamesFilter.length === 0 && <  img src = {gif} width="310px" height="200px"  />}
</div>
       
    )
}

