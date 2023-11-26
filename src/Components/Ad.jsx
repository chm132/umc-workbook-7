import React from 'react';
import adImg from '../img/Ad.svg';

export default function Ad({ display }){
  if (!display) {
    return null;
  }
  return (
    <div>
      <img src={adImg} />
    </div>
  );
}