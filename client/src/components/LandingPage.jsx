import React from "react";
import { Link } from "react-router-dom"
import "../styles/landing.css"

export default function LandingPage(){
    return(
        <div className="containerLP">
           <div className="divdelBotonLP">

           
            <Link to = "/home">
                <button className="button-landing">GO!!</button>
            </Link>
            </div>    
        </div>
    )
}