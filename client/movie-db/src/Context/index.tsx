import { useState, useEffect, createContext } from "react";

// API
import Movie from "../api/Models/movie";
import MovieService from "../api/Services/MovieService";
const movieService = new MovieService();

// Init context
export const MovieContext = createContext(null);

export const MovieContextProvider = ({ children }) => {
  // push datas in states
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [movieData, setMovieData] = useState<Movie>();

  // ********** UseEffect **********
  // get all movies
  useEffect(() => {
    const getMovies = async () => {
      const req = await movieService.getMovies();
      setMoviesData(req);
    };
    getMovies().then(() => {
      if (moviesData) return;
      throw "Can't fetch datas";
    });
  }, []);

  return (
    <MovieContext.Provider value={{ moviesData, setMovieData, movieData }}>
      {children}
    </MovieContext.Provider>
  );
};
