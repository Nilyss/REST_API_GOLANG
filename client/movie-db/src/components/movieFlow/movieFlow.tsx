import { useContext } from "react";

import "./movieFlow.scss";
import { MovieContext } from "../../Context";

export default function MovieFlow() {
  const { moviesData, movieData } = useContext(MovieContext);

  return (
    <>
      {movieData ? (
        <ul className="moviesFlowWrapper">
          <li className="moviesFlowWrapper__list">
            <h3 className="moviesFlowWrapper__list__title">
              {movieData.title}
            </h3>
            <p className="moviesFlowWrapper__list__overview">
              {movieData.description}
            </p>
          </li>
        </ul>
      ) : (
        moviesData && (
          <ul className="moviesFlowWrapper">
            {moviesData.map((movies, index) => {
              return (
                <li className="moviesFlowWrapper__list" key={index}>
                  <h3 className="moviesFlowWrapper__list__title">
                    {movies.title}
                  </h3>
                  <p className="moviesFlowWrapper__list__overview">
                    {movies.description}
                  </p>
                </li>
              );
            })}
          </ul>
        )
      )}
    </>
  );
}
