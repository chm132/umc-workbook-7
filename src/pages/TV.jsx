import React from "react";
import { Tvs } from "../tvDummy"; 
import TvPage from "../Components/Movie/TvPage";

export default function TV(){
    return(
        <div className="tv-app-container">
            {Tvs.results.map((item) => {
              return (
                <TvPage
                  name={item.name}
                  overview={item.overview}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              );
            })}
          </div>
      );
  }