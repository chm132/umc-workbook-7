import React from "react";
import {useNavigate} from "react-router-dom";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w200";

function Movie({ title, overview, poster_path, vote_average })  {
  const navigate = useNavigate();

  const onclickImg = () => {
    navigate(`/Movie/${title}`, {
      state:{
      title,
      overview,
      poster_path,
      vote_average
      },
      
    });
  };


  return (
    <div className='movie-container' onClick={onclickImg}>
      <div className='overlay' >
          <h4>{title}</h4>
          <p>{overview}</p>
      </div>
      <img  src={IMG_BASE_URL + poster_path} alt={title} />
      <div className='movie-info'>
        <h5>{title}</h5>
        <span>{vote_average}</span>
      </div>
    </div>
    );
  };
  
  export default Movie;