import React, { Component } from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="col-sm-2" onClick={() => handleOnClick(id)}>
            <div className="pokemon">
                <img src={image} className="image-pokemon"/>
            </div>
        </div>
    )
} 
  
export default PokeCell;