import React from 'react';
import sprites from '../../assets/sprites.png';
import './PokeBox.css';

const PokeBox = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  //parte utilizada para consumo dos sprites dos pokémons na imagem sprites.png
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return (
    <button onClick={() => handleOnClick(id)} style={style} className="poke-box"></button>
  )
};

export default PokeBox;