import { useState, useContext } from "react";

import "./addMovieForm.scss";

import { MovieContext } from "../../Context";

export default function AddMovieForm() {
  const [titleValue, setTitleValue] = useState("");
  const [overviewValue, setOverviewValue] = useState("");

  const { postMovie } = useContext(MovieContext);

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleOverviewChange = (event) => {
    setOverviewValue(event.target?.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const movie = {
      ID: Math.floor(Math.random() * 1000),
      Title: titleValue,
      Description: overviewValue,
    }

    postMovie(movie);

    setTitleValue("");
    setOverviewValue("");
  };

  return (
    <>
      <div className="addMovieFormWrapper">
        <h2 className="addMovieFormWrapper__title">Add movie or show to DB</h2>
        <form className="addMovieFormWrapper__form">
          <div className="inputWrapperAdd">
            <label className="addMovieFormWrapper__label" htmlFor="title">
              Title
            </label>
            <input
              onChange={handleTitleChange}
              className="addMovieFormWrapper__input"
              type="text"
              placeholder="ex: Blade Runner"
              value={titleValue}
            />
          </div>

          <div className="inputWrapperAdd">
            <label className="addMovieFormWrapper__label" htmlFor="title">
              Description
            </label>
            <input
              onChange={handleOverviewChange}
              className="addMovieFormWrapper__input"
              type="text"
              placeholder="ex: Science fiction"
              value={overviewValue}
            />
          </div>

          <div className="addMovieFormWrapper__buttonWrapper">
            <button
              onClick={handleSubmit}
              className="addMovieFormWrapper__buttonWrapper__button"
            >
              Add to DB !
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
