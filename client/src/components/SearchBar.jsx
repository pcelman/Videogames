import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../actions/index";

export default function SearchBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
   

    function hanldeInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameVideogames(name))
        
    }

    return (
        <div className="wrap">

        <div className="search">
            <input 
            className="searchTerm"
            type= "text"
            placeholder = "search..."
            onChange = {(e)=> hanldeInputChange(e)}
            />
            <button className="searchButton" type ="submit" onClick={(e)=> handleSubmit(e)}  disabled={name.length ? false : true} >Search</button>
        </div>
        </div>

    )
}