import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './Context';
import Pokemons from './componentes/pokemons/Pokemons';
import PokemonInfo from './componentes/pokemons/PokemonInfo';
import Header from './componentes/layouts/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Pokemons} />
								<Route exact path="/pokemon/info/:id" component={PokemonInfo} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
