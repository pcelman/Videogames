import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  getGenre,
  savePage,
  getPlatforms,
} from "../actions/index.js";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pg from "./Pg";
import jpg from "./placeHolder.jpg";
import notF from "./notF.png";
import "../styles/home.css";
import NavBar from "./NavBar.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const videogamesFilter = useSelector((state) => state.videogamesFilter);
  const allVideogames = useSelector((state) => state.videogames);
  const status = useSelector((state) => state.status);
  const pages1 = useSelector((state) => state.pages);
  const platforms = useSelector((state) => state.platforms);

  const videogames = useSelector((state) => state.videogames);
  //paginado

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(pages1);
  const [videogamePerPage, setVideogamesPerPage] = useState(12);
  const indexOfLastVideogame = currentPage * videogamePerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamePerPage;
  const currentVideogames = videogamesFilter.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getGenre());
    dispatch(getVideogames());
    dispatch(getPlatforms());
  }, [dispatch]);

  function handlePage(e) {
    dispatch(savePage(currentPage));
  }

  return (
    <body className="container-home">
      <header className="navBar">
        <div className="title">VIDEOGAMES</div>
        <Link to="/create">
          {" "}
          <button className="new">NEW</button>
        </Link>

        <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </header>

      <div className="pg">
        <Pg
          videogamePerPage={videogamePerPage}
          videogamesFilter={videogamesFilter.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>

      <div className="div-cards">
        {videogamesFilter[0] === "otra cosa" ? (
          <img src={notF} alt="not found " width="610px" />
        ) : (
          currentVideogames?.map((e) => {
            return (
              <div className="tarjeta-home">
                <Link
                  className="link"
                  onClick={(e) => handlePage(e)}
                  to={`/detail/${e.id}`}
                >
                  <Card
                    onMouseOver={{ scale: 1.4 }}
                    key={e.id}
                    name={e.name}
                    image={
                      e.image ? (
                        e.image
                      ) : (
                        <img src={jpg} width="310px" height="200px" />
                      )
                    }
                    genre={e.genres.map((e) => e.name)}
                    rating={e.rating}
                  />
                </Link>
              </div>
            );
          })
        )}
      </div>
      {videogamesFilter.length === 0 && allVideogames.length === 0 && (
        <div class="progress-loader">
          <div class="progress"></div>
        </div>
      )}
      {allVideogames.length > 0 && videogamesFilter.length === 0 ? (
        <img src={notF} alt="not found " width="610px" />
      ) : (
        <span></span>
      )}
    </body>
  );
}
