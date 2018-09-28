import React, { Component } from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = ({ handleOnClick }) => { 
  const cells = pokeClasses.map(pokeClass => {

    return (
      <PokeCell key={pokeClass.id} pokeClass={pokeClass} handleOnClick={handleOnClick}/>
    );
  });

  return (
    <ul className="poke-list">
      {cells}
    </ul>
  )
}

export default PokeList;