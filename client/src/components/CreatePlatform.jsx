import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/createPlatform.css"

export default function Platform (handleCheck={handleCheck}){

    function handleCheck(e){
        if (e.target.checked){
          setInput({
            ...input,
            status: e.target.value
          })
        }
      }

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
                    //     platform :[]
                    //   })
                    // }

    return (

<div className="platform-create">

<label className="title-name"><strong>Platforms:  </strong> </label>
  <div id='platforms' className="plat-div">
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
)
}