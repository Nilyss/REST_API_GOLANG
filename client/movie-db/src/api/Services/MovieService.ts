import Movie from "../Models/movie";

import { getRequest, postRequest } from "../ApiCalls/apiCall";

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

  async addMovie(movie) {
    const req = await postRequest("/movie/add", movie);
    const res = req.data;
    console.log("res =>", res)
  }
}
