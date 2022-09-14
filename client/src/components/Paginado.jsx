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
         <span className="flechas" onClick={()=>handlePrev()} > {"<"} </span>
         }
   


         <span className="paginado">
             { pageNumbers && pageNumbers.map(number =>(
                pageNumbers.length === 1 ? <span></span>:
                number < currentPage-2 || number > currentPage+2 ? <span>.</span> : 
                 <span className = {number === currentPage  ? "letraNegrita" : "letraStandard"} 
                 onClick={()=> paginado(number)}
                 key={number}   
                 >{number} </span>
              
                 ))}
             </span>
     
        {
         pageNumbers &&
        currentPage === pageNumbers.length ? <div></div> : 
         <span className="arrows" onClick={()=>handleNext()} > {">"} </span>
         }

     {/* <div>
        <lable className="itemsPerPage-paginado">items per page</lable>
        <select onChange={handlePages}>
        <option value = "12"> 12</option>
        <option value = "25">25</option>
        <option value = "50">50</option>
        <option value = "all">all</option>
        </select>
     </div> */}


     </div>

   
    )
}

