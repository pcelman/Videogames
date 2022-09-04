import React from "react";
import {useState, useEffect} from "react"
import  { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenre } from "../actions/index.js"
import { Link } from "react-router-dom"
import  Card  from "./Card"
// import  Footer  from "./Footer"
import  Paginado  from "./Paginado"
import gif from "./loading.gif"
import "../styles/home.css"
import NavBar from "./NavBar.jsx";


export default function Home(){

    const dispatch = useDispatch()
    const videogamesFilter = useSelector ((state) => state.videogamesFilter)
    const videogames = useSelector ((state) => state.videogames)
    //paginado
    const [order, setOrder] = useState("")
    const[currentPage, setCurrentPage] = useState(1)
    const[videogamePerPage, setVideogamesPerPage] = useState(12)
    const indexOfLastVideogame = currentPage * videogamePerPage 
    const indexOfFirstVideogame = indexOfLastVideogame - videogamePerPage
    const currentVideogames = videogamesFilter.slice(indexOfFirstVideogame, indexOfLastVideogame)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getGenre())
        dispatch(getVideogames())
    },[dispatch]) 

    function handleClick(e){
    e.preventDefault();
    dispatch(getVideogames())
    dispatch(getGenre())

    }

    return (
<div className="container-home">
    <div>
        <Link to = "/create"> CREATE</Link>
        <h1>VIDEOGAMES</h1>
        {/* <button onClick={e=> {handleClick(e)}}>RELOAD</button> */}
         <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder}/>  
    </div>

<div className="paginado">

<Paginado
videogamePerPage={videogamePerPage}
videogamesFilter={videogamesFilter.length}
paginado={paginado}
currentPage={currentPage}
/>
</div>

        <div>
        <h1>Videogames</h1>
        </div>
<div>
        {currentVideogames?.map((e) =>{ 
            return (
                <div className="div-cards">
                    <Link to ={`/detail/${e.id}`}> 
                        <Card key= {e.id} name = {e.name} image = {e.image? e.image : <img src = "http://www.clipartbest.com/cliparts/9c4/8nA/9c48nAycE.jpeg" width="310px" height="200px" />} genre= {e.genre} rating= {e.rating}/>
                    </Link>
                 </div>
           );
        })}      
</div>
        {currentVideogames.length === 0 && <  img src = {gif} alt= "Loading... " width="310px" height="200px"  />}
        <div>

            {/* <Footer/> */}
            <Paginado
videogamePerPage={videogamePerPage}
videogamesFilter={videogamesFilter.length}
paginado={paginado}
currentPage={currentPage}
/>
        </div>
</div>
    )
}

