import React from "react";
import '../styles/card.css';
import fStar from "./star-full-icon.png"



export default function Card({ name, image, genre, rating }){
// const star= <img src ={fStar}/>
const star= "*"
const index = Math.floor(rating)


    return(      
            
                <div className="card" > 
                
                <img src={image} alt = {name} className="image-card" />

                  
                <div className="texto-card">
                
                <div className="name-card">{name}</div>
             
                <ul className="genre-card">{genre.join(", ")}</ul>

                
                <div className="stars">
                 { [...Array(Math.floor(rating))].map(( i) => <div key={i}>⭐</div>
                )}
                </div>
                
                </div>

                   </div>
                

              
                
    );
}