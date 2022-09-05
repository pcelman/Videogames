import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogame, getGenre, getVideogames, cleanFilter } from "../actions/index"; 
import { useDispatch, useSelector } from "react-redux";
import "../styles/create.css"
// import CreateGenre from "./CreateGenre.jsx";
// import CreatePlatform from "./CreatePlatform.jsx";
// import CreateForm from "./CreateForm.jsx";
 




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


          <form className="form-create">

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

<div className="checkboxes-create">
                  <label className="title-name"><strong>Genres:</strong></label>
                  <div id='genres' className="genres-div">

                            <div className="Action">
                                <input name="Action" 
                                value="Action" 
                                type="checkbox" 
                                id="Action" />
                                <label htmlFor="Action"
                                onChange={(e)=>handleCheck(e)}
                                >Action</label>
                            </div>


                            <div className="Adventure">
                                <input name='Adventure' value='Adventure' type="checkbox" id="Adventure" />
                                <label htmlFor="Adventure">Adventure</label>
                            </div>


                             <div>
                                <input name='Arcade' value='Arcade' type="checkbox" id="Arcade" />
                                <label htmlFor="Arcade">Arcade</label>
                            </div>


                            <div className="Board-Games">
                                <input name='Board-Games' value='Board-Games' type="checkbox" id="Board-Games" />
                                <label htmlFor="Board-Games">Board Games</label>
                            </div>


                            <div>
                                <input name='Casual' value='Casual' type="checkbox" id="Casual" />
                                <label htmlFor="Casual">Casual</label>
                            </div>


                            <div>
                                <input name='Educational' value='Educational' type="checkbox" id="Educational" />
                                <label htmlFor="Educational">Educational</label>
                            </div>


                            <div>
                                <input name='Family' value='Family' type="checkbox" id="Family" />
                                <label htmlFor="Family">Family</label>
                            </div>


                            <div>
                                <input name='Fighting' value='Fighting' type="checkbox" id="Fighting" />
                                <label htmlFor="Fighting">Fighting</label>
                            </div>


                            <div className="Indie">
                                <input name='Indie' value='Indie' type="checkbox" id="Indie" />
                                <label htmlFor="Indie">Indie</label>
                            </div>


                            <div>
                                <input name='Massively Multiplayer' value='Massively Multiplayer' type="checkbox" id="Massively Multiplayer" />
                                <label htmlFor="Massively-Multiplayer">Multiplayer</label>
                            </div>


                            <div>
                                <input name='Platformer' value='Platformer' type="checkbox" id="Platformer" />
                                <label htmlFor="Platformer">Platformer</label>
                            </div>


                            <div>
                                <input name='Puzzle' value='Puzzle' type="checkbox" id="Puzzle" />
                                <label htmlFor="Puzzle">Puzzle</label>
                            </div>


                            <div>
                                <input name='Racing' value='Racing' type="checkbox" id="Racing" />
                                <label htmlFor="Racing">Racing</label>
                            </div>


                            <div>
                                <input name='Strategy' value='Strategy' type="checkbox" id="Strategy" />
                                <label htmlFor="Strategy">Strategy</label>
                            </div>


                            <div>
                                <input name='RPG' value='RPG' type="checkbox" id="RPG" />
                                <label htmlFor="RPG">RPG</label>
                            </div>


                            <div>
                                <input name='Shooter' value='Shooter' type="checkbox" id="Shooter" />
                                <label htmlFor="Shooter">Shooter</label>
                            </div>


                            <div>
                                <input name='Simulation' value='Simulation' type="checkbox" id="Simulation" />
                                <label htmlFor="Simulation">Simulation</label>
                            </div>


                            <div>
                                <input name='Sports' value='Sports' type="checkbox" id="Sports" />
                                <label htmlFor="Sports">Sports</label>
                            </div>
                      </div>
                        </div>

                        <div className="platform-create">

<label className="title-name"><strong>Platforms:  </strong> </label>
  <div id='platforms' className="platforms-create">
  <div>
      <input name='macOS' 
      type="checkbox" 
      id="macOS" />
      <label htmlFor="macOS"
      onChange={(e)=>handleCheck(e)}
      >macOS</label>
  </div>


  <div>
      <input name='iOS' type="checkbox" id="iOS" />
      <label htmlFor="iOS">iOS</label>
  </div>
  <div>
      <input name='PlayStation 4' type="checkbox" id="PlayStation 4" />
      <label htmlFor="PlayStation 4">PlayStation 4</label>
  </div>
  <div>
      <input name='PlayStation 5' type="checkbox" id="PlayStation 5" />
      <label htmlFor="PlayStation 5">PlayStation 5</label>
  </div>
  <div>
      <input name='XBOX' type="checkbox" id="XBOX" />
      <label htmlFor="XBOX">XBOX</label>
  </div>
  <div>
      <input name='Android' type="checkbox" id="Android" />
      <label htmlFor="Android">Android</label>
  </div>
  <div>
      <input name='PS Vita' type="checkbox" id="PS Vita" />
      <label htmlFor="PS Vita">PS Vita</label>
  </div>
  <div>
      <input name='PC' type="checkbox" id="PC" />
      <label htmlFor="PC">PC</label>
  </div>
</div>
</div>


          </div>

          <div className="boton-create">
          <button onClick={handleSubmit} type= 'submit' 
          disabled={Object.keys(errors).length? true : false} >Create</button>
          </div>
          </div> 
        )
     } 