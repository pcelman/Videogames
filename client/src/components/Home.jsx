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
    // const [order, setOrder] = useState("")
    // const[currentPage, setCurrentPage] = useState(1)
    // const[charactersPerPage, setCharactersPerPage] = useState(12)
    // const indexOfLastCharacter = currentPage * charactersPerPage 
    // const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    // const currentCharacters = charactersFilter.slice(indexOfFirstCharacter, indexOfLastCharacter)

    // const paginado = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }




    useEffect(()=>{
        dispatch(getGenre())
        dispatch(getVideogames())
    },[dispatch]) 





    return (
    <div className="container-home">
        {/* <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder}/> */}
        <div className="filtros-home">

        <div className="boton-y-titulo">

        {/* <Link to = "/create"><button className="home-create-button">CREATE</button></Link> */}
        
        <h1 className="titulo-home">Videogames</h1>
        </div>
   

            

            <div className="main">
 </div>
 
            {/* <Paginado
            charactersPerPage={charactersPerPage}
            charactersFilter={charactersFilter.length}
            paginado={paginado}
            currentPage={currentPage}
            /> */}
          
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
       
        </div>
        {videogamesFilter.length === 0 && <  img src = {gif} width="310px" height="200px"  />}
        </div>
       
    )
}

