import React from "react";
import { movies } from "../movieDummy"; 
import Movie from "../Components/Movie/Movie";

export default function Movies(){
  return(
    <div className="app-container">
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              overview={item.overview}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
  );
}
