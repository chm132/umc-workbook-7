import React from "react";
import {useNavigate} from "react-router-dom";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function TvPage({ name, overview, poster_path, vote_average })  {
    const navigate = useNavigate();

  const onclickImg = () => {
    navigate(`/tv/${name}`, {
      state:{
      name,
      overview,
      poster_path,
      vote_average
      },
      
    });
  };

    return (
        <div className='tv-container' onClick={onclickImg}>
          <div className='tv-overlay' >
              <h4>{name}</h4>
              <p>{overview}</p>
          </div>
          <img  src={IMG_BASE_URL + poster_path} alt={name} />
          <div className='tv-info'>
            <h5>{name}</h5>
            <span>{vote_average}</span>
          </div>
        </div>
        );
};

