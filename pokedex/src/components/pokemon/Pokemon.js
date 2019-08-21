import React, { Component } from "react";
import axios from "axios";

import api from "../../services/Api";

export default class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    types: [],
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: ""
    },
    height: "",
    weight: "",
    eggGroup: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    hatchSteps: ""
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

    const pokemonRes = await api.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
      }
    });

    const height =
      Math.round(pokemonRes.data.height * 0.328084 * 0.0001 * 100) / 100;
    const weight =
      Math.round(pokemonRes.data.weight * 0.1 * 0.0001 * 100) / 100;

    const types = pokemonRes.data.types.map(type => type.type.name);

    const abilities = pokemonRes.data.abilities.map(ability => {
      return ability.ability.name
        .toLowerCase()
        .split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join("  ");
    });

    const evs = pokemonRes.data.stats
      .filter(stat => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name}`;
      })
      .join(", ");

    await api.get(pokemonSpeciesUrl).then(res => {
      let description = "";
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return;
        }
      });

      const femaleRate = res.data["gender_rate"];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round((100 / 255) * res.data["capture_rate"]);

      const eggGroup = res.data["egg_groups"]
        .map(group => {
          return group.name
            .toLowerCase()
            .split("-")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join("  ");
        })
        .join(", ");

      const hatchSteps = 255 * (res.data["hatch_counter"] + 1);

      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        catchRate,
        eggGroup,
        hatchSteps
      });
    });

    this.setState({
      imageUrl,
      pokemonIndex,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense
      },
      height,
      weight,
      abilities,
      evs
    });
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-1">
                <h5>{this.state.pokemonIndex}</h5>
              </div>
              <div className="col-11">
                <div className="float-right">
                  {this.state.types.map(type => (
                    <span
                      key={type}
                      className="badge badge-dark badge-pill mr-2"
                    >
                      {type
                        .toLowerCase()
                        .split(" ")
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join("  ")}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-body" />
              <div className="row align-items-center">
                <div className="col-md-3" />
                <img
                  src={this.state.imageUrl}
                  className="card-img-top rounded mx-auto mt-2"
                />
              </div>

              <div className="col-md-9">
                <h4 className="mx-auto">
                  {this.state.name
                    .toLowerCase()
                    .split(" ")
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join("  ")}
                </h4>

                <div className="row mt-3">
                  <div className="col">
                    <p>{this.state.description}</p>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12 col-md-3">HP</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{
                          width: `${this.state.stats.hp}%`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <small>{this.state.stats.hp}</small>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{
                          width: `${this.state.stats.attack}%`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <small>{this.state.stats.attack}</small>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{
                          width: `${this.state.stats.defense}%`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <small>{this.state.stats.defense}</small>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Speed</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{
                          width: `${this.state.stats.speed}%`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <small>{this.state.stats.speed}</small>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{
                          width: `${this.state.stats.specialAttack}%`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <small>{this.state.stats.specialAttack}</small>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{
                          width: `${this.state.stats.specialDefense}%`
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <small>{this.state.stats.specialDefense}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-body">
              <h5 className="card-title text-center">Profile</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="float-right">Height:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6 className="float-left">{this.state.height} ft </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
