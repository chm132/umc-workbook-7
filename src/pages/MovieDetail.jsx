import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../Components/Movie/Movie';

export default function MovieDetail() {

    const { title } = useParams(); 
    const { state } = useLocation();
    console.log(title);
    console.log(state);

    return (
	      <div>
            <img src={IMG_BASE_URL + state.poster_path} alt={title} />
            <div>{title}</div>
        </div>
    )
}