import React from "react";
import "../styles/paginado.css"



export default function Paginado ({videogamePerPage, videogamesFilter, paginado, currentPage}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(videogamesFilter/videogamePerPage); i++){
        pageNumbers.push(i)
    }

    function handlePrev(){
		if (currentPage <= 1) return;
		paginado(currentPage - 1);
    }

    function handleNext(){
        if (currentPage >= pageNumbers.length) return; 
		paginado(currentPage + 1);
    }
    return (
        <div className="botonera">
       
        {currentPage===1 ? <div></div> : 
         <span onClick={()=>handlePrev()} > {"<"} </span>
         }
   
         <span className="paginado">
             { pageNumbers && pageNumbers.map(number =>(
                pageNumbers.length === 1 ? <span></span>:
                number < currentPage-2 || number > currentPage+2 ? <span>.</span> : 
                 <span className = {number === currentPage  ? "letraNegrita" : "letraStandard"} 

                 key={number.id} 
                 onClick={()=> paginado(number)}
                 
                 
                 >{number}</span>
              
                 ))}
             </span>
     
        {currentPage === pageNumbers.length ? <div></div> : 
         <span onClick={()=>handleNext()} > {">"} </span>
         }
     
     </div>

   
    )
}

