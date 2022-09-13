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

    
     
    const genre = useSelector((state) => state.genre.sort((a, b)=> { if(a.name > b.name){ return 1 }
    if(a.name < b.name){return -1}
    return 0}))
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
          return ()=>{
            dispatch(cleanFilter())
          }
        }, []);
      
        useEffect(() => {
        validate(input)
        }, [input, errors]);

function validate(input){
  let errors = {}
  if(!input.name){ 
    errors.name = 'Fill in the name';
  } if(input.name.length < 3){ 
    errors.name = 'Name must have at least 3 characters';
  } if(input.name.length > 25){ 
    errors.name = 'You´ve reached the limit of characters';
  } if ( videogames.find(e => e.name === input.name)){
errors.name = "Name already exists"
  }  if ( input.rating < 0 ||  input.rating >5 ){
    errors.name = "Rating must be between 0 and 5"
  }  if ( input.description.length < 8 ||  input.description.length >255 ){
    errors.description = "Needs a description between 8 and 255 characters"
  }  if ( input.genre.length === 0 || input.genre.length > 3) {
    errors.genre = "Select one or up to three genres"
  }  if (input.genre.includes(input.genre.value)){
    errors.genre = "Genre already selected"
  } if (input.image && !"([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)") {
    errors.image = "You may add a link to an image that ends with jpeg, jpg, png, gif or bmp"
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
            console.log(input)
          }


          function handleSubmit(e){//Selene pone el handle submit en el <form onSubmit={(e)=>handleSubmit(e)}>
            //y el form llega hasta abajo del boton CREATE
                      e.preventDefault()
                      console.log(input)
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
                      history.push('/home')//aca quiero que vaya a "/detail/:id" (en detail pornerle el boton HOME, no BACK)
                    }

                function handleDelete(e){
                  setInput({
                    ...input,
                    genre: input.genre.filter(t =>t!== e.target.value)
                  })
                }
                function handleDeletePlatforms(e){
                  setInput({
                    ...input,
                    genre: input.platforms.filter(t =>t!== e.target.value)
                  })
                }
                function handleSelect(e){
                  if (!input.genre.includes(e.target.value)){
                    
                    setInput({
                      ...input,
                      genre: [...input.genre, e.target.value]
                    })
                  }
                    setErrors(validate({
                      ...input,
                      genre: [...input.genre, e.target.value]
                    }))
                }
            

                function handlePlatform(e){
                  if (!input.platforms.includes(e.target.value)){
                    
                    setInput({
                      ...input,
                      platforms: [...input.platforms, e.target.value]
                    })
                  }
                    setErrors(validate({
                      ...input,
                      platforms: [...input.platforms, e.target.value]
                    }))
                }
          // function handlGenre(e){
          //   setGenre({
          //     ...videogames,
          //     genre: [...new Set([...videogames.genre, e.target.value])]
          //   })
          // }

        return (
          <div className="container-total-create"> 

          <div className="header-videogame-create">
              <Link to = 'home'><button className="button-ch">go back</button></Link>
          <h1 className="texto-videogame-create"> Make your own VG</h1>
          </div>
          <div className="create-videogame-components">


          
          <form className="form-create" >

<div>
 <label  >Name: </label>
 <input  placeholder="requred..." 
 type = "text"  
 value = {input.name} 
 name = "name"
 autoComplete="off" 
 onChange={handleInputChange}/>
 <span>{input.name.length}/25</span>
</div>

<div>
 <label  >Date: </label>
 <input  
 type = {new Date()}
 value = {input.date} 
 name = "date"
 autoComplete="off" 
 onChange={handleInputChange}/>
 
</div>


 <div>
 <label>Image: </label>
 <input type = "text"  
 value = {input.image}  
 name = "image"  
 onChange={handleInputChange} />
 </div>

 <div>
   <lable>Rating:</lable>
   <input type = "number"
   value = {input.rating}
   name = "rating"
   onChange={handleInputChange}/>

 </div>
 <div>
 <lable>Description:</lable>
   <input type = "text"
   value = {input.description}
   name = "description"
   style= {{width:300, height: 100}}
   placeholder= {"Required. 255 characters max"}
   onChange={ handleInputChange}/>
 {/* (e)=>{ if (input.length < 255) setInput (e.target.value) */}
 </div>


<label className="title-genres">
<strong>Genres:</strong> </label>
<label className="subtitle-genres"> Choose up to 3 genres </label>

<select onChange={handleSelect}> {genre.map((e) => (  <option value={e.name}>   {e.name}  </option> ))}
                   </select>

{/* <div>{input.genre.map(e => e,",")}</div> */}
                  {input.genre.map(el=>
                    <div>
                     <button value={el} className="botonX" onClick={(el)=>handleDelete(el)}>X</button> 
                    </div>)}

<div> 
<div id='platforms' className="plat-div">
                        <label className="title-name"><strong>Platforms:  </strong> </label>
                            <div>
                                <label><input type="checkbox" name='macOS' value="macOS"
                                onChange={(e)=>handleCheck(e)}/>
                                macOS</label>
                                <label><input type="checkbox" name='iOS' value="iOS"
                                onChange={(e)=>handleCheck(e)}/>
                                iOS</label>
                                <label><input type="checkbox" name="PlayStation 4" value="PlayStation 4"
                                onChange={(e)=>handleCheck(e)}/>
                                PlayStation 4</label>
                                <label><input type="checkbox" name="PlayStation 5" value="PlayStation 5"
                                onChange={(e)=>handleCheck(e)}/>
                                PlayStation 5</label>
                                <label><input type="checkbox" name='XBOX' value="XBOX"
                                onChange={(e)=>handleCheck(e)}/>
                                XBOX</label>
                                <label><input type="checkbox" name='Android' value="Android"
                                onChange={(e)=>handleCheck(e)}/>
                                Android</label>
                                <label><input type="checkbox" name='PS Vita' value="PS Vita"
                                onChange={(e)=>handleCheck(e)}/>
                                PS Vita</label>
                                <label><input type="checkbox" name='PC' value="PC"
                                onChange={(e)=>handleCheck(e)}/>
                                PC</label>
                            </div>




                            {/* <XXXXXXXXXXXXXX>

                            </XXXXXXXXXXXXXX> */}


                        {/* <select onChange={handlePlatform}>
                                <option value='macOS'> macOS </option>
                                <option value='iOS'> iOS </option>
                                <option value='PlayStation 4'> PlayStation 4 </option>
                                <option value='Playstation 5'> Playstation 5 </option>
                                <option value='XBOX'> XBOX </option>
                                <option value='PS Vita'> PS Vita </option>
                                <option value='PC'> PC </option>
                        </select> */}

                        </div>
                        <div>
                     <button value="macOS" className="botonX" onClick={(e)=>handleDeletePlatforms(e)}>X</button> 
                    </div>
                        <br/>
</div>



<div className="boton-create">
            <div className="errores">

            {errors.name &&(<p className="error-name-create">{errors.name}</p> )}
            {errors.description && (<p className="error-image-create">{errors.image}</p>)}
         
            {errors.rating && (<p className="error-rating-create">{errors.rating}</p>)}
            <br/>
            {errors.description && (<span className="error-description-create">{errors.description}</span>)}
          
          
            </div>
          {/* <Link to ={`/detail/${id}`}> aqui estaria bueno que muestre la carta creada */}
    
</div>
          </form>


          <div className="div-boton">
          <br/>
          <button onClick={handleSubmit} type= 'submit' 
          disabled={Object.keys(errors).length ? true : false} >Create</button>
          {/* </Link> */}
          </div>
<div className="image-preview-create">
  {input.image && <img src = {input.image} width = "300px" />}

</div>

          </div>
          </div> 
        )
     } 