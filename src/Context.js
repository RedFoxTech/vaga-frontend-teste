import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'PAGINACAO':
			return {
				...state,
				url: (state.url = action.payload),
				helper: state.modificar()
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	componentDidMount() {
		this.buscarDados(this.state.url);
	}

	async buscarDados(url) {
		const res = await axios.get(url);

		this.setState({
			pokemons: res.data
		});
	}

	state = {
		pokemons: [],
		url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8',
		dispatch: (action) => this.setState((state) => reducer(state, action)),
		helper: [],
		modificar: () => this.buscarDados(this.state.url)
	};
	render() {
		return <Context.Provider value={this.state}> {this.props.children} </Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
