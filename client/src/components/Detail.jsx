import React from "react";
import { Link } from "react-router-dom";
import  { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, cleanFilter } from "../actions/index";
import "../styles/detail.css"

export default function Detail(props) {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)

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
            <div>
                <img src = {detail[0].image } alt="image not submitted" width ="410px" height="300px" />
                <div className="texto-detail">
                    <h1 className="nombre-detail">{detail[0].name}</h1>
                <h2>Rating: {detail[0].rating}</h2>
                <p>Released: { detail[0].released || detail.createdAt }</p>
                <p>platforms: {detail[0].platform || " "}</p>
                <p>Genres: { detail[0].genre || detail.genre  }</p>
                <p>Description: {detail[0].description || "not submitted"}</p>
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
