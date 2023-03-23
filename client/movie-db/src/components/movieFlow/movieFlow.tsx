import { useContext, useState } from "react";

import "./movieFlow.scss";
import { MovieContext } from "../../Context";

export default function MovieFlow() {
  const { moviesData } = useContext(MovieContext);

  return (
    <>
      {moviesData && (
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
      )}
    </>
  );
}
