import { useState, useContext } from "react";
import "./searchBar.scss";

// API Datas
import { MovieContext } from "../../Context";

export default function SearchBar() {
  const { moviesData, setMovieData } = useContext(MovieContext);
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // find requested movie id
    moviesData.find((movie) => {
      if (movie.title !== title) {
        setMessage(`There's no movie or show with this name in DB ! `);
        setMovieData("");
      }
      if (movie.title === title) {
        setMessage(``);
        setMovieData(movie);
      }
    });
  }

  return (
    <>
      <div className="searchBarWrapper">
        <h2>Search for a movie, show...</h2>
        <form className="inputWrapper">
          <input
            type="text"
            className="searchBarWrapper__input"
            placeholder="Blade runner, Supernatural, ..."
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="searchBarWrapper__submitButton"
          >
            Search !
          </button>
        </form>
        {message && <p className={"searchBarWrapper__message"}>{message}</p>}
      </div>
    </>
  );
}
