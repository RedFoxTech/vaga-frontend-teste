import React, { Component } from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';

const PokeList = ({ handleOnClick }) => { 
  const cells = pokeClasses.map(pokeClass => {

    return (
      <PokeCell key={pokeClass.id} pokeClass={pokeClass} handleOnClick={handleOnClick}/>
    );
  });

  return (
    <div className="row">
      {cells}     
    </div>
  )
}

export default PokeList;