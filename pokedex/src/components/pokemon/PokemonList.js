import React, { Component } from "react";
import axios from "axios";

import api from "../../services/Api";

import PokemonCard from "./PokemonCard";

export default class PokemonList extends Component {
  state = {
    currentPage: 1,
    pageCount: 0,
    limit: 12,
    pokemon: []
  };

  componentDidMount() {
    this.loadPokemons();
  }

  loadPokemons = async (offset = 0) => {
    const { pageCount, limit, url } = this.state;
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

  render() {
    const { pokemon } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handlePrevPage}>
          Anterior
        </button>
        <button type="button" onClick={this.handleNextPage}>
          Próxima
        </button>
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
      </div>
    );
  }
}
