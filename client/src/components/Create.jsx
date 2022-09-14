import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  postVideogame,
  getGenre,
  getVideogames,
  cleanFilter,
  getPlatforms
} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "../styles/create.css";


export default function Create() {
  const platforms = useSelector((state) => state.platforms.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }))
  
  const dispatch = useDispatch();
  const history = useHistory();

  const genre = useSelector((state) =>
    state.genre.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
  );

  const [errors, setErrors] = useState({});
  const videogames = useSelector((state) => state.videogames);

  const [input, setInput] = useState({
    name: "",
    rating: 0,
    released: "",
    description: "",
    image: "",
    platforms: [],
    genre: [],
  });

  useEffect(() => {
    dispatch(getGenre());
    dispatch(getVideogames());
    dispatch(getPlatforms())
    if (validate(input)) {
      setErrors(validate(input));
    }
    return () => {
      dispatch(cleanFilter());
    };
  }, []);

  let pattern =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  let reg_exImg = /.*(png|jpg|jpeg|gif)$/;

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Fill in the name";
    }
    if (input.name.length < 3) {
      errors.name = "Name must have at least 3 characters";
    }
    if (input.name.length > 25) {
      errors.name = "You´ve reached the limit of characters";
    }
    if (videogames.find((e) => e.name === input.name)) {
      errors.name = "Name already exists";
    }
    if (input.released.length === 0) {
      errors.released = "Must fill in a date";
    }
    if (input.rating === 0) {
      errors.name = "Rating must be between 1 and 5";
    }
    if (input.description.length < 8 || input.description.length > 255) {
      errors.description = "Needs a description between 8 and 255 characters";
    }

    if (input.genre.length === 0) {
      errors.genre = "Select at least a genre";
    }
    if (input.genre.length > 3) {
      errors.genre = "Select up to three genres";
    }
    if (input.genre.includes(input.genre.value)) {
      errors.genre = "Genre already selected";
    
    } if (!pattern.test(input.image)) {
      errors.image = "You may add a link"
    } if (!pattern.test(input.image)) {
      if (!reg_exImg.test(input.image)){
      errors.image = "Link needs to end with jpeg, jpg, png, gif or bmp"
    }}
    return errors;
  }



  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(errors.genre);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(dispatch(postVideogame(input)));

    alert("Created!");
    setInput({
      name: "",
      image: "",
      rating: 0,
      released: "",
      description: "",
      platforms: [],
      genre: [],
    });
    history.push('/home')
  }


  function handleDelete(e) {
    e.preventDefault();
    setInput({
      ...input,
      genre: input.genre.filter((t) => t !== e.target.value),
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: [e.target.value],
      })
    );
    const nuevoInput = input;
    setErrors(validate(nuevoInput));

    console.log(errors);
    console.log(errors.genre);
  }

  function handleDeletePlatforms(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter((t) => t !== e.target.value),
    });
  }

  function handleSelect(e) {
    if (!input.genre.includes(e.target.value)) {
      setInput({
        ...input,
        genre: [...input.genre, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          genre: [...input.genre, e.target.value],
        })
      );
    }
  }

  function handleSelectPlatforms(e) {
    if (!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    }
  }


  return (
    <div className="container-total-create">
      <div className="header-videogame-create">
        <Link to="home">
          <button className="button-ch">go back</button>
        </Link>
        <div className="texto-videogame-create"> Make your own VG</div>
      </div>
      <div className="create-videogame-components">
        <form className="form-create">
          <div>
            {/* <label  >Name: </label> */}
            <input
              placeholder="Name"
              type="text"
              value={input.name}
              name="name"
              style={{ width: 200 }}
              autoComplete="off"
              onChange={handleInputChange}
            />
            {/* <span>{input.name.length}/25</span> */}
          </div>

          <div>
            {/* <label  >Date: </label> */}
            <input
              type="date"
              value={input.date}
              style={{ width: 200 }}
              name="released"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>

          <div>
            {/* <label>Image: </label> */}
            <input
              type="text"
              placeholder="Image"
              value={input.image}
              style={{ width: 200 }}
              name="image"
              onChange={handleInputChange}
            />
          </div>

          <div>
            {/* <lable>Rating:</lable> */}
            <input
              type="number"
              placeholder="Rating"
              value={input.rating}
              style={{ width: 200 }}
              name="rating"
              onChange={handleInputChange}
            />
          </div>
          <div>
            {/* <lable>Description:</lable> */}
            <input
              type="text"
              value={input.description}
              name="description"
              style={{ width: 200, height: 100 }}
              placeholder={`Description. Required. 255 characters max`}
              onChange={handleInputChange}
            />
          </div>

          <label className="title-genres">
            <strong>Genres:</strong>{" "}
          </label>
          <label className="subtitle-genres"> Choose up to 3 genres </label>

          <select onChange={handleSelect}>{genre.map((e) => (
              <option value={e.name}> {e.name} </option>
            ))}
          </select>
        
          {input.genre.map((el) => (
            <div>
              <p> {el}</p>{" "}
              <button
                name="genre"
                value={el}
                className="botonX"
                onClick={(el) => handleDelete(el)}
              >
                X
              </button>
            </div>
          ))}

          <div>
            <label className="title-name">
              <strong>Platforms: </strong>{" "}
            </label>
            <div id="platforms" className="plat-div">
              <select onChange={handleSelectPlatforms}>
                {" "}
                {platforms.map((e) => (
                  <option value={e}> {e} </option>
                  
                ))}{" "}
              </select>
            </div>
  
            
            {input.platforms.map((el) => (
            <div>
              <p> {el}</p>{" "}
              <button
                name="platforms"
                value={el}
                className="botonX"
                onClick={(el) => handleDeletePlatforms(el)}>
                X
              </button>
            </div>
          ))}


            <br />
          </div>

          <div className="boton-create">
            <div className="errores">
              {errors.name && (
                <p className="error-name-create">{errors.name}</p>
              )}
              {errors.description && (
                <p className="error-image-create">{errors.image}</p>
              )}

              {errors.rating && (
                <p className="error-rating-create">{errors.rating}</p>
              )}
              <br />
              {errors.description && (
                <p className="error-description-create">
                  {errors.description}
                </p>
              )}
               <br />
              {errors.released && (
                <p className="error-released-create">{errors.released}</p>
              )}
            </div>
          </div>
        </form>

        <div className="div-boton">
          <br />
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={Object.keys(errors).length ? true : false}
          >
            Create
          </button>
  
        </div>
        <div className="image-preview-create">
          {input.image && <img src={input.image} width="300px" />}
        </div>
      </div>
    </div>
  );
}
