import React from "react";
import '../styles/card.css';


export default function Card({ name, image, genre, rating }){



    return(      
            
                <div className="card" > 
                   <div className="image-card">
                    <img src={image} alt = {name} width="100px" height="70px" />
                   </div>
                   <div className="texto-card">
                   <h1 className="name-card"  >{name}</h1>
                   <h1 className="rating-card"  >{rating}</h1>
                   <h5 className="genre">{genre} </h5>
                   </div>

                   </div>
                
    );
}