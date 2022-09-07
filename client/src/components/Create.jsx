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
    errors.name = "Rating must be between 0 and 5"
  } else if ( input.description.length < 8 ||  input.description.length >255 ){
    errors.description = "Needs a description between 8 and 255 characters"
  } else if (input.genre.length === 0 || input.genre.length > 2) {
    errors.genre = "Select one or two types"
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

          function handleCheck(e){
                  if (e.target.checked){
                    setInput({
                      ...input,
                      platforms: e.target.checked
                    })
                  }
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


          
          <form className="form-create" onSubmit={(e)=>handleSubmit(e)}>

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
   {errors.rating && (
     <span className="error">{errors.rating}</span>
   )}
 </div>
 <div>
 <lable>Description:</lable>
   <input type = "text"
   value = {input.description}
   name = "description"
   style= {{width:300, height: 100}}
   placeholder= {"255 characters max"}
   onChange={handleInputChange}/>
   {errors.description && (
     <span className="error">{errors.description}</span>
   )}
 </div>


<label className="title-genres">
<strong>Genres:</strong> </label>
<select onChange={handleSelect}> {genre.map((e) => (  <option value={e.name}>   {e.name}  </option> ))}
                   </select>

{/* <div>{input.genre.map(e => e,",")}</div> */}
                  {input.genre.map(el=>
                    <div>
                     <button value={el} className="botonX" onClick={(el)=>handleDelete(el)}>X</button> 
                    </div>)}

<div> 


                    <label className="title-name"><strong>Platforms: </strong> </label>
                        <div id='platforms' className="plat-div">
                        <select onChange={handlePlatform}>
                                <option value='macOS'> macOS </option>
                                <option value='iOS'> iOS </option>
                                <option value='PlayStation 4'> PlayStation 4 </option>
                                <option value='Playstation 5'> Playstation 5 </option>
                                <option value='XBOX'> XBOX </option>
                                <option value='PS Vita'> PS Vita </option>
                                <option value='PC'> PC </option>
                        </select>
                        </div>
                        <div>
                     <button value="macOS" className="botonX" onClick={(e)=>handleDeletePlatforms(e)}>X</button> 
                    </div>

                        <br/>
</div>



          <div className="boton-create">
          {/* <Link to ={`/detail/${id}`}> aqui estaria bueno que muestre la carta creada */}
          <button onClick={handleSubmit} type= 'submit' 
          disabled={Object.keys(errors).length ? true : false} >Create</button>
          {/* </Link> */}
          </div>
          </form>
          </div>
          </div> 
        )
     } 