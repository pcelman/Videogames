import React from "react";
import "../styles/card.css";
import fStar from "./star-full-icon.png";

export default function Card({ name, image, genre, rating }) {
  // const star= <img src ={fStar}/>
  const star = "*";
  const index = Math.floor(rating);

  return (
    <body className="card">
      <img src={image} alt={name} className="card__picture" />
    <section className="card__text">

      <div className="card__title">{name}</div>
      {/* <div className="card__box"></div> */}

      <div className="card__stars">
        {[...Array(Math.floor(rating))].map((i) => (
            <div key={i}>⭐</div>
            ))}
      </div>
      <ul className="card__genre">{genre.join(", ")}</ul>

            </section>
    </body>
  );
}
