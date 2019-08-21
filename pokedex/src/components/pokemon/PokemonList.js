import React, { Component } from "react";

import api from "../../services/Api";

import PokemonCard from "./PokemonCard";

export default class PokemonList extends Component {
  state = {
    currentPage: 1,
    pageCount: 0,
    limit: 12,
    pokemon: [],
    pokemonInput: ""
  };

  componentDidMount() {
    this.loadPokemons();
  }

  loadPokemons = async (offset = 0) => {
    const { pageCount, limit } = this.state;
    const response = await api.get("pokemon", {
      params: {
        offset,
        limit
      }
    });

    const { count, results } = response.data;

    if (pageCount === 0) {
      this.setState({ pageCount: Math.ceil(count / limit) });
    }

    this.setState({ pokemon: results });
  };

  handlePrevPage = () => {
    const { currentPage, limit } = this.state;
    if (currentPage === 1) return;

    const prevPage = currentPage - 1;
    const offset = (prevPage - 1) * limit;

    this.loadPokemons(offset);

    this.setState({ currentPage: prevPage });
  };

  handleNextPage = () => {
    const { currentPage, limit, pageCount } = this.state;
    if (currentPage === pageCount) return;

    const nextPage = currentPage + 1;
    const offset = (nextPage - 1) * limit;

    this.loadPokemons(offset);

    this.setState({ currentPage: nextPage });
  };

  loadSpecificPokemon = async e => {
    e.preventDefault();
    const { pokemonInput } = this.state;
    if (!pokemonInput) return;

    const response = await api.get(`pokemon/${pokemonInput}`);
    const pokemon = [response.data.species];

    this.setState({
      pokemon: pokemon,
      pokemonInput: ""
    });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { pokemon, pokemonInput, currentPage, pageCount } = this.state;

    return (
      <div>
        <form class="col-lg-6 offset-lg-3" onSubmit={this.loadSpecificPokemon}>
          <div class="row justify-content-center p-1">
            <input
              onChange={this.handleInput}
              class="form-control"
              type="text"
              name="pokemonInput"
              value={pokemonInput}
              placeholder="Pokemon name"
            />
            <button type="submit" class="btn btn-secondary m-1">
              Search
            </button>
          </div>
        </form>

        <div class="mt-5 text-center">
          {pokemon ? (
            <div className="row">
              {pokemon.map(pokemon => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </div>
          ) : (
            <h1>Loading</h1>
          )}
          <strong class="text-secondary">
            Página {currentPage} de {pageCount}
          </strong>
          <div class="row d-flex justify-content-center mb-5">
            <button class="btn btn-secondary m-2" onClick={this.handlePrevPage}>
              Anterior
            </button>
            <button class="btn btn-secondary m-2" onClick={this.handleNextPage}>
              Próxima
            </button>
          </div>
        </div>
      </div>
    );
  }
}
