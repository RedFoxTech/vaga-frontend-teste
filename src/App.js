import React, { useState, useEffect } from 'react';
import './App.css';

import api from './services/api';

import logo from './assets/logo.png'
import iconeSearch from './assets/iconeSearch.png'

function App() {

  const [textInput, setTextInput] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState('')
  const [indexPage, setIndexPage] = useState(0)

  useEffect(() => {
    async function loadPokemon() {

      const response = await api.get(`pokemon/?offset=${indexPage}&limit=18`)
      setPokemons(response.data.results)
    }

    loadPokemon()
  }, [indexPage])

  async function handleSubmit(e) {
    e.preventDefault();

    if (!textInput) {
      await api.get(`pokemon/`)
        .then((response) => {
          setPokemons(response.data.results)
          setPokemon('')
        })
    }

    const response = await api.get(`/pokemon/${textInput}/`)
    setPokemons([])
    setPokemon(response.data)
  }

  function extractNumberUrl(url) {
    var splits = url.split('/', 7);
    return splits[6]
  }

  function nextPage() {
    setIndexPage(indexPage + 18)
    setPokemon('')
    setTextInput('')
  }

  function backPage() {
    setIndexPage(indexPage - 18)
    setPokemon('')
    setTextInput('')
  }

  return (
    <div className="cont">
      <div className="header"><img src={logo} alt="a" /></div>
      <section className="searchArea">
        <form onSubmit={handleSubmit}>
          <div className="searchBox">
            <input className="input"
              placeholder="Digite o nome ou número de um Pokémon ..."
              value={textInput}
              onChange={e => setTextInput(e.target.value)} />
            <button className="btnSearch" type="submit"><img src={iconeSearch} alt='a' /></button>
          </div>
        </form>
        <div className="filterArea">
          <div className="filterInt">
            <span>Ordenar</span>
            <span>Ordenar</span>
          </div>
        </div>
      </section>
      <div className="sectionCards">
        <nav className="navNextBack">
          <button className="btn btn-primary" disabled={indexPage === 0} onClick={() => backPage()}>Anterior</button>
          <button className="btn btn-primary" disabled={indexPage === 945} onClick={() => nextPage()}>Próxima</button>
        </nav>

        <div className="sectionCardsInt">
          {pokemons ? pokemons.map((e) => (
            <div className="card" key={e.name}>
              <span>{e.name}</span>
              <img className="imgCard" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractNumberUrl(e.url)}.png`} alt='a' />
            </div>
          )) : <div></div>
          }

          {pokemon ?
            <div className="card">
              <span>{pokemon.name}</span>
              <img className="imgCard" src={pokemon.sprites.front_default} alt='a' />
            </div>
            : <div></div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;