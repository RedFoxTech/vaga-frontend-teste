import React, { Component } from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition};

    return (
        <li className="pokemon" onClick={() => handleOnClick(id)}>
            <div style={style} className="image-pokemon"></div>
        </li>
    )
} 
  
export default PokeCell;