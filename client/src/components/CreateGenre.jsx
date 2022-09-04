import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/createGenre.css"






export default function CreateGenre(handleCheck={handleCheck}){
    const genre = useSelector((state) => state.genre)
    const [errors,setErrors] = useState({});


        const [input,setInput] = useState({
            genre :[]
        })
       
        // useEffect(() => {
        //   dispatch(getGenre());
        //   dispatch(getVideogames())
        //   if(validate(input)){
        //     setErrors(validate(input))
        //   }
        //   return ()=>{
        //     dispatch(cleanFilter())
        //   }
        // }, []);
      
                    // function handleSubmit(e){
                    //   e.preventDefault()
                    //   dispatch(postVideogame(input))
                    //   alert("Created!")
                    //   setInput({
                    //     genre :[]
                    //   })
                    // }

   

                function handleCheck(e){
                  if (e.target.checked){
                    setInput({
                      ...input,
                      status: e.target.value
                    })
                  }
                }


        return (

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
        )
     } 