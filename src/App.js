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
    async function loadPokemons() {

      const response = await api.get(`pokemon/?offset=${indexPage}&limit=18`)
      setPokemons(response.data.results)
    }

    loadPokemons()
  }, [indexPage])

  async function handleSubmit(e) {
    e.preventDefault();

    if (!textInput) {
      await api.get(`pokemon/?offset=0&limit=18`)
        .then((response) => {
          setPokemons(response.data.results)
          setPokemon('')
        })
    }

    const response = await api.get(`/pokemon/${textInput}/`)
    setPokemons([])
    setPokemon(response.data)
  }

  async function goToHome() {
    await api.get(`pokemon/?offset=0&limit=18`)
      .then((response) => {
        setPokemons(response.data.results)
        setPokemon('')
        setTextInput('')
      })
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
      <div className="header"><img className="logo" onClick={() => goToHome()} src={logo} alt="a" /></div>
      <section className="searchArea">
        <form onSubmit={handleSubmit}>
          <div className="searchBox">
            <input className="input"
              placeholder="Buscar pokémon ..."
              value={textInput}
              onChange={e => setTextInput(e.target.value)} />
            <button className="btnSearch" type="submit"><img src={iconeSearch} alt='a' /></button>
          </div>
        </form>
        <div className="filterArea">
          <div className="filterInt">
            <div className="dropdown">
              <li className="btn btn-light dropdown-taggle">Teste</li>

              <li className="btn btn-light">Teste</li>
              <li className="btn btn-light">Teste</li>
              <li className="btn btn-light">Teste</li>
              <li className="btn btn-light">Teste</li>
            </div>
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
            <div className="card" key={e.name} data-toggle="modal" data-target={`#card${e.name}`}>
              <span>{e.name}</span>
              <img className="imgCard" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractNumberUrl(e.url)}.png`} alt='a' />

              <div className="modal fade" id={`card${e.name}`}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{e.name}</h5>
                      <button className="close" data-dismiss="modal"><span>&times;</span></button>
                    </div>
                    <div className="modal-body">
                      <div className="cardModal" key={e.name}>
                        <img className="imgCard" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractNumberUrl(e.url)}.png`} alt='a' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) : <div></div>
          }
          {
            pokemon ?
              <div className="card">
                < span > {pokemon.name}</span>
                <img className="imgCard" src={pokemon.sprites.front_default} alt='a' />
              </div>
              : <div></div>
          }
        </div>
      </div >
    </div >
  );
}

export default App;