import Movie from "../Models/movie";

import { getRequest } from "../ApiCalls/apiCall";
export default class MovieService {
  // GET request
  async getMovies(): Promise<Movie[]> {
    const req = await getRequest("/movies");
    const res = req.data;
    return res.map((data) => new Movie(data));
  }

  async getMovie(): Promise<Movie> {
    const req = await getRequest("/movie");
    const res = req.data;
    return res.map((data) => new Movie(data));
  }
}
