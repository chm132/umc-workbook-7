import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../Components/Movie/TvPage';

export default function TvDetail() {

    const { name } = useParams(); 
    const { state } = useLocation();
    console.log(name);
    console.log(state);

    return (
	      <div>
            <img src={IMG_BASE_URL + state.poster_path} alt={name} />
            <div>{name}</div>
        </div>
    )
}