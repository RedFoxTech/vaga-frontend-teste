import React from 'react';
import './pokeInfo.css';

const pokeInfo= ({ pokemon }) => {
  //constantes para utilizar as informações recebidas em data e passada para o objeto {pokemon} do state com os parametros do arquivo Pokemon.js
  const { id, name, sprite, type } = pokemon;
  return (
    <section className="pInfo">
      <img src={sprite} className='pokemon-image' alt="sprite"/>
      <div className='box-info'>
        <h1 className='poke-name'>ID: {id} {name}</h1>
        <p className="poke-type">Type: {type}</p>
      </div>
    </section>
  )
}

export default pokeInfo;