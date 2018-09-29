import React, { Component } from 'react';
import Header from './Header';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  handleOnClick(id) {
    //ESTE LINK DA API NÃO TRAZ INFO
    //fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)

    //LINK ALTERNATIVO
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    //VERIFICA SE OBJ É PREENCHIDO
    //console.log(this.state)
    return (
      <div className="App">
        <Header />
        <DetailView pokemon={this.state.pokemon}/>
        <div className="container">          
          <PokeList handleOnClick={this.handleOnClick}/>
        </div>
      </div>
    );
  }
}

export default App;