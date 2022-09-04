import React, { useState, useEffect } from "react";
import { postVideogame, getGenre, getVideogames, cleanFilter } from "../actions/index"; 
import { useDispatch, useSelector } from "react-redux";
import "../styles/createForm.css"

export default function CreateForm( handleInputChange, handleSubmit){
    const dispatch = useDispatch()
    const genre = useSelector((state) => state.genre)
    const [errors,setErrors] = useState({});
    const videogames = useSelector(state=>state.videogames)
    
    
    const [input,setInput] = useState({
        name:"",
        rating: 0,
        released: "",
        description: "",
        image: "",
        platforms: [],
        genre :[]
    })
    
    return(

<form>

                   <div>
                    <label  >Name: </label>
                    <input  placeholder="requred..." 
                    type = "text"  
                    value = {input.name} 
                    name = "name" 
                    onChange={handleInputChange}/>
                    {errors.name &&(
                    <p className="error">{errors.name}</p>
                      )}
                   </div>

                    <div>
                    <label>Image: </label>
                    <input type = "text"  value = {input.image}  name = "image"  onChange={handleInputChange} />
                    </div>

                    <div>
                      <lable>Rating:</lable>
                      <input type = "number"
                      value = {input.rating}
                      name = "rating"
                      onChange={handleInputChange}/>
                      {errors.rating && (
                        <span className="error">{errors.rating}</span>
                      )}
                    </div>
                    <div>
                    <lable>Description:</lable>
                      <input type = "text"
                      value = {input.description}
                      name = "description"
                      onChange={handleInputChange}/>
                      {errors.description && (
                        <span className="error">{errors.description}</span>
                      )}
                    </div>
</form>
    )}
