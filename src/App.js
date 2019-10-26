import React, { useState, useEffect } from 'react';
import './App.css';

import api from './services/api';

import logo from './assets/logo.png'
import iconeSearch from './assets/iconeSearch.png'

function App() {

  const [textInput, setTextInput] = useState('')
  const [pokemons, setPokemons] = useState([])

  const [test, setTest] = useState([])
  const [load, setload] = useState(false)
  const [typeOn, setTypeOn] = useState(false)

  const [pokemon, setPokemon] = useState('')
  const [pokemonType, setPokemonType] = useState('')

  const [indexPage, setIndexPage] = useState(0)

  useEffect(() => {
    async function loadPokemons() {

      await api.get(`pokemon/?offset=0&limit=900`)
        .then((response) => {
          setPokemons(response.data.results)
          setload(true)
        })
    }

    loadPokemons()
  }, [])

  function teste(min, max) {

    if (!typeOn) {
      // let temp = pokemons.filter((e) => {
      //   console.log(e.pokemon)
      //   return extractNumberUrl(e.url) >= min && extractNumberUrl(e.url) <= max
      // })

      var temp = []

      for (var i = min; i < max; i++) {
        temp.push(pokemons[i])
      }
      setTest(temp)
    }

    if (typeOn) {

      var temp2 = []
      for (var i = min; i < max; i++) {
        temp2.push(pokemons[i].pokemon)
      }

      setTest(temp2)
    }

    setload(false)

  }

  if (load) {
    teste(0, 18)
  }

  async function filterByType(index) {
    await api.get(`type/${index + 1}/`)
      .then((response) => {
        setTypeOn(true)
        setPokemons(response.data.pokemon)
        setload(true)
        setPokemon('')
      })
  }

  useEffect(() => {
    async function loadPokemonsType() {

      const response = await api.get('/type')
      setPokemonType(response.data.results)
    }

    loadPokemonsType()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    await api.get(`/pokemon/${textInput}/`)
      .then((response) => {
        setTest([])
        setPokemon(response.data)
      })
      .catch((error) => {
        alert(error)
      })
  }

  async function goHome() {
    api.get(`pokemon/?offset=0&limit=900`)
      .then((response) => {
        setTypeOn(false)
        setPokemons(response.data.results)
        setload(true)
      })
  }

  function extractNumberUrl(url) {
    var splits = url.split('/', 7);
    return splits[6]
  }

  function nextPage() {
    teste(indexPage + 19, indexPage + 36)
    setIndexPage(indexPage + 18)
    setPokemon('')
    setTextInput('')
  }

  function prevPage() {
    teste(indexPage - 18, indexPage)
    setIndexPage(indexPage - 18)
    setPokemon('')
    setTextInput('')
  }

  return (
    <div className="cont">
      <div className="header"><img className="logo" onClick={() => goHome()} src={logo} alt="a" /></div>
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
            <div className="dropdown dropleft">
              <button className="btn btn-light dropdown-toggle" data-toggle="dropdown">Selecione tipo</button>

              <div className="dropdown-menu">
                {pokemonType ? pokemonType.map((type, index) => (
                  <>
                    <button onClick={() => filterByType(index)}
                      className="dropdown-item">{type.name}</button>
                  </>
                )) : <></>}

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sectionCards">
        <nav className="nav">
          <button className="btn btn-primary" disabled={indexPage === 0} onClick={() => prevPage()}>Anterior</button>
          <button className="btn btn-primary" disabled={indexPage === 945} onClick={() => nextPage()}>Próxima</button>
        </nav>

        <div className="sectionCardsInt">
          {test ? test.map((e) => (

            <div className="card" key={e.name} data-toggle="modal" data-target={`#card${e.name}`}>
              <h5>{e.name}</h5>
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
              <div className="card" data-toggle="modal" data-target={`#card${pokemon.name}`}>
                <h5> {pokemon.name}</h5>
                <img className="imgCard" src={pokemon.sprites.front_default} alt='a' />
                <div className="modal fade" id={`card${pokemon.name}`}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{pokemon.name}</h5>
                        <button className="close" data-dismiss="modal"><span>&times;</span></button>
                      </div>
                      <div className="modal-body">
                        <div className="cardModal" key={pokemon.name}>
                          <img className="imgCard" src={pokemon.sprites.front_default} alt='a' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : <div></div>
          }
        </div>
      </div >
    </div >
  );
}

export default App;