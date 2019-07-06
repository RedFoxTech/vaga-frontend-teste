import React, { Component } from 'react';
import axios from 'axios';

export default class Pokemonint extends Component {
	state = {
		pokemonInfo: []
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

		this.setState({ pokemonInfo: res.data });
	}

	render() {
		const { id } = this.props.match.params;
		const { name, flavor_text_entries } = this.state.pokemonInfo;

		let element = {};

		for (const key in flavor_text_entries) {
			if (flavor_text_entries[key].language.name === 'en') {
				element = flavor_text_entries[key];
			}
		}

		return (
			<div>
				<h1 className="text-center display-4 mb-4">{name}</h1>
				<div className="row">
					<div className="mx-auto col-lg-5 card">
						<img
							className="card-img-top"
							style={{ width: '60%', margin: '0 auto' }}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
							alt="pokemons"
						/>
						<div className="card-body">
							<span>Nº {id}</span>
							<p>{element.flavor_text}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
