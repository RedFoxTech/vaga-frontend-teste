import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pokemon extends Component {
	state = {
		informacoes: []
	};

	render() {
		const { name, url } = this.props;

		let reg = new RegExp(/(\/\d+)/g);
		let id = url.match(reg);
		let num = id[0].replace('/', '');

		return (
			<React.Fragment>
				<li className="col-md-4 col-lg-3 mb-3">
					<div className="card">
						<img
							className="card-img-top"
							style={{ width: '60%', margin: '0 auto' }}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
							alt="pokemons"
						/>
						<div className="card-body">
							<span>Nº {num}</span>
							<h5 className="card-title">{name}</h5>
							<Link className="btn btn-block btn-primary" to={`/pokemon/info/${num}`}>
								Mais informações
							</Link>
						</div>
					</div>
				</li>
			</React.Fragment>
		);
	}
}
