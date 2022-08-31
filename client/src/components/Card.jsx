import React from "react";
// import '../styles/card.css';


export default function Card({ name, image, genre, rating }){



    return(      
            
                <div className="card" > 
                   <h1 className="name-card"  >{name}</h1>
                   <h1 className="rating-card"  >{rating}</h1>
                   <h5 className="genre">{genre} </h5>
                   <img src={image} alt = {name} width="310px" height="200px"/>
              </div>     
    );
}