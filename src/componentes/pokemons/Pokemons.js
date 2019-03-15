import React, { Component } from 'react';
import Pokemon from './Pokemon';
import { Consumer } from '../../Context';

export default class Pokemons extends Component {
	paginacao(url, dispatch) {
		dispatch({ type: 'PAGINACAO', payload: url });
	}

	render() {
		return (
			<Consumer>
				{(value) => {
					const { pokemons, dispatch } = value;
					return (
						<React.Fragment>
							<h1 className="text-center display-4 mb-4">Pokedex</h1>
							<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
								<button
									className="btn btn-success"
									onClick={this.paginacao.bind(this, pokemons.previous, dispatch)}
								>
									Anterior
								</button>
								<button
									className="btn btn-success"
									onClick={this.paginacao.bind(this, pokemons.next, dispatch)}
								>
									Próximo
								</button>
							</div>
							<ul className="row" style={{ listStyle: 'none', padding: '0' }}>
								{pokemons.length !== 0 ? (
									pokemons.results.map((pokemon, index) => (
										<Pokemon key={index} name={pokemon.name} url={pokemon.url} index={index + 1} />
									))
								) : null}
							</ul>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}
