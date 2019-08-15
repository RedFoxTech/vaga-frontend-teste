import React from 'react';
import PokeBox from '../pokeBox/PokeBox';
import { pokeClasses } from '../../pokeClasses';
import './PokeList.css';

const PokeList = ({ handleOnClick }) => {
  const boxes = pokeClasses.map(pokeClass => {
    return (
      <PokeBox 
        key={pokeClass.id} 
        pokeClass={pokeClass} 
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    <section className="poke-list">
      {boxes}
    </section>
  )
}

export default PokeList;