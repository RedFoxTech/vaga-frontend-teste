import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

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
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <div className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            <img
              className="card-img-top rounded mx-auto mt-2 w-50"
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ tooManyRequests: true })}
              src={this.state.imageUrl}
            />
            <div className="card-body">
              <h6 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split("-")
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join("  ")}
              </h6>
            </div>
          </div>
        </StyledLink>
      </div>
    );
  }
}
