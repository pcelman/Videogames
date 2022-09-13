import React from "react";
import { Link, useHistory } from "react-router-dom";
import  { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, cleanFilter } from "../actions/index";
import "../styles/detail.css"
import jpg from "./placeHolder.jpg"
import  OtherGames  from "./OtherGames"

export default function Detail(props) {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)
    const videogames = useSelector((state) => state.videogames)

    const history = useHistory()
    // console.log("detail[0]:", detail[0])
    // console.log("typeof: OBJETO", typeof(detail[0]))

    console.log("genero:", detail[0]?.genres[0]?.name)
const unGenero = detail[0]?.genres[0]?.name
console.log("unGenero:", unGenero)

// useEffect(()=>{
//     filtro()
// }, [unGenero])


const filtro= function shuffle (){
    console.log("enShuffle:", unGenero)
    if (unGenero==="Action") return "Action";
    else if (unGenero==="Board Games") return "Board Games";
    else if (unGenero==="Shooter") return "Shooter";
    else if (unGenero==="Adventure") return "Adventure";
    else if (unGenero==="Indie") return "Indie";
    else if (unGenero==="Puzzle") return "Puzzle";
    else if (unGenero==="Platformer") return "Platformer";
    else if (unGenero==="RPG") return "RPG";
    else if (unGenero==="Massively Multiplayer") return "Massively Multiplayer";
    else if (unGenero==="Racing") return "Racing";
    else if (unGenero==="Sports") return "Sports";
    else if (unGenero==="Simulation") return "Simulation";
    else if (unGenero==="Arcade") return "Arcade";
    else if (unGenero==="Fighting") return "Fighting";
}()
    console.log("filtro:", filtro)
const filtroA= videogames?.filter((e)=>e.filtro)
console.log("filtroA:", filtroA)



    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
        return ()=>{
            dispatch(cleanFilter())
          }
    }, [dispatch])
    

    return (
        <div className="fondo-detail">

            <div className="contenedor-detail">

            
            <div className="card-detail">

        {
            detail.length > 0 ?
            <div className="columns-detail">
                <img src = {detail[0].image } alt="image not submitted" width ="610px" height="auto"  />

                {/* < img src = {detail[0].image && detail[0].image alt="image not submitted" width ="410px" height="300px" || imagen } */}

                <div className="texto-detail">
                    <div className="nombre-detail">{detail[0].name}</div>
                <div className="rating-detail"><strong>Rating</strong>: {`${detail[0].rating} ⭐` }</div>
                <div className="released-detail">Released: { detail[0].released || detail.createdAt }</div>
                
                {detail[0].platforms ? 
                <div className="platforms-detail">{`platforms: ${detail[0].platforms.join(", ")}`}</div> 
                : <div></div>}

                <div className="genres-detail">Genres: {`  ${detail[0].genres.map((e)=>e.name).join(", ")}`  }</div>
                <div>Description: {detail[0].description}</div>
                </div>

                </div> : <p className="loading-detail">Loading...</p>
        }
        <div className="volver">

        <Link to = "/home">
            <button className="button-detail">Back</button>
        </Link>


        </div>
        </div>
        </div>
        {/* <div>
            Other videogames you might be interested in:
        <div>
          <OtherGames unGenero={detail[0]?.genres[0]?.name}/>
        </div>
        </div> */}
    </div>
)
}
