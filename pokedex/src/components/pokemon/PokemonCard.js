import React, { Component } from "react";

import styled from "styled-components";

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    tooManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <div className="card-deck">
            <div className="card">
              <h5 className="card-header">{this.state.pokemonIndex}</h5>
              <img
                className="card-img-top rounded mx-auto mt-2"
                onLoad={() => this.setState({ imageLoading: false })}
                onError={() => this.setState({ tooManyRequests: true })}
                src={this.state.imageUrl}
              />
              <div className="card-body">
                <h5 className="card-title">{this.state.name}</h5>
                <p className="card-text">This is a ... pokemon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
