import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogame, getGenre, getVideogames, cleanFilter } from "../actions/index"; 
import { useDispatch, useSelector } from "react-redux";
import "../styles/create.css"
import CreateGenre from "./CreateGenre.jsx";
import CreatePlatform from "./CreatePlatform.jsx";
import CreateForm from "./CreateForm.jsx";
 




export default function Create(){
    const dispatch = useDispatch()
    const history = useHistory()
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
       
        useEffect(() => {
          dispatch(getGenre());
          dispatch(getVideogames())
          if(validate(input)){
            setErrors(validate(input))
          }
          return ()=>{
            dispatch(cleanFilter())
          }
        }, []);
      

function validate(input){
  let errors = {}
  if(!input.name){ 
    errors.name = 'Fill in the name';
  } else if (videogames.find(e => e.name === input.name)){
errors.name = "Name already exists"
  } else if ( input.rating < 0 ||  input.rating >5 ){
    errors.types = "Rating must be between 0 and 5"
  } else if ( input.description.length < 0 ||  input.description.length >255 ){
    errors.types = "Rating must be between 0 and 5"
  }
  return errors
}

          function handleInputChange(e){
            setInput({
              ...input,
              [e.target.name]: e.target.value
            })
            setErrors(validate({
              ...input,
              [e.target.name]: e.target.value
            }))
          }


          function handleSubmit(e){
                      e.preventDefault()
                      dispatch(postVideogame(input))
                      alert("Created!")
                      setInput({
                        name:"",
                        image: "",
                        rating: 0,
                        released: "",
                        description: "",
                        platforms: [],
                        genre :[]
                      })
                      history.push('/home')
                    }

          function handleCheck(e){
                  if (e.target.checked){
                    setInput({
                      ...input,
                      status: e.target.value
                    })
                  }
                }


        return (
          <div className="container-total-create"> 

          <div className="header-videogame-create">
              <Link to = 'home'><button className="button-ch">go back</button></Link>
          <h1 className="texto-videogame-create"> Make your own VG</h1>
          </div>
          <div className="create-videogame-components">
<CreateForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} validate={validate}/>
<CreateGenre handleCheck={handleCheck}/>
<CreatePlatform handleCheck={handleCheck}/>
          </div>

          <div className="boton-create">
          <button onClick={handleSubmit} type= 'submit' 
          disabled={Object.keys(errors).length? true : false} >Create</button>
          </div>
          </div> 
        )
     } 