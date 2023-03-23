import { useState, useEffect, createContext } from "react";

// API
import Movie from "../api/Models/movie";
import MovieService from "../api/Services/MovieService";
const movieService = new MovieService();

// Init context
export const MovieContext = createContext(null);

export const MovieContextProvider = ({ children }) => {
  // push datas in states
  const [moviesData, setMoviesData] = useState([]);

  // ********** UseEffect **********
  // get all movies
  useEffect(() => {
    const getMovies = async () => {
      const req = await movieService.getMovies();
      setMoviesData(req);
    };
    getMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ moviesData }}>
      {children}
    </MovieContext.Provider>
  );
};
