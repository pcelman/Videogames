import React from "react";
import { Link, useHistory } from "react-router-dom";
import  { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, cleanFilter } from "../actions/index";
import "../styles/detail.css"
import jpg from "./placeHolder.jpg"


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

                <div className="texto-detail">
                    <div className="nombre-detail">{detail[0].name}</div>
                    
                {/* <div className="rating-detail"><strong>Rating</strong>: {`${detail[0].rating} ⭐` }</div> */}

                

                <div className="estrellitas">
                 { [...Array(Math.floor(detail[0].rating))].map(( i) => <div key={i}>⭐</div>
                )}
                </div>
            


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

    </div>
)
}
