import React, { Component } from 'react';
import ListPoke from './components/pokeList/PokeList';
import PokeInfo from './components/pokeInformation/pokeInfo';
import Pokemon from './Pokemon';
import './App.css';
import NavBar from './components/navBar/navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    //parte usada para solucionar problemas de escopo que tive na primeira versão
    this.handleOnClick = this.handleOnClick.bind(this);
  }


//automação da parte da requisição, ao invés de fazer varias requisições para cada id, ele faz a requisição de acordo com o evento de click.
  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        //resposta da api em json data
        const pokemon = new Pokemon(data);
        //transformação do json em objeto manipulável dentro da aplicação
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="App">
          <PokeInfo pokemon={this.state.pokemon} />
          <ListPoke handleOnClick={this.handleOnClick} />
      </div>
    </div> 
    );
  }
}

export default App;
