import { useState, useContext } from "react";
import "./searchBar.scss";
import { Movie } from "../../Utils/types";
// API Datas
import { MovieContext } from "../../Context";

export default function SearchBar() {
  const { moviesData, setMovieData } = useContext(MovieContext);
  const [titleValue, setTitleValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  
  function handleChange(event) {
    setTitleValue(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(moviesData) {
      const movie = moviesData.find((movie: Movie) => movie.title === titleValue);
      return movie
        ? (setMovieData(movie), setMessage(""), setTitleValue(""))
        : (setMessage("No movies found"), setTitleValue(""));
    }
    else {
      return setMessage("No movies found");
    }
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
            value={titleValue}
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
