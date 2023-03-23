import { useState } from "react";
import "./searchBar.scss";

// API calls
import MovieService from "../../api/Services/MovieService";
const movieService = new MovieService();

export default function SearchBar() {
  const [inputMessage, setInputMessage] = useState("");
  const [movies, setMovies] = useState([]);

  function handleChange(event) {
    setInputMessage(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const getMovies = async () => {
      const req = await movieService.getMovies();
      setMovies(req);
    };
    getMovies();
  }

  return (
    <>
      <div className="searchBarWrapper">
        <h2>Search for a movie, series...</h2>
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
      </div>
      {movies && (
        <>
          {movies.map((movie, index) => {
            return (
              <ul key={index}>
                <li>{movie.title}</li>
              </ul>
            );
          })}
        </>
      )}
    </>
  );
}
