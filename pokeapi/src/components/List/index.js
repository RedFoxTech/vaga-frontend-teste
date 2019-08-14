import React, { Component } from 'react';

import './styles.css';

import Item_List from './components/Item_List';

class List extends Component {

  constructor() {
    super();
    
    this.state = {
      pokemons: [],
      ida: '',
      volta:'',
      url: 'https://pokeapi.co/api/v2/pokemon/',
    }

  }

  getPokemons = async () => {
    fetch(`${this.state.url}`)
      .then(data => data.json())
      .then((data) => {
        this.setState({ pokemons: data.results });
      });
  }

  ir = async () => {
    fetch(`${this.state.url}`)
      .then(data => data.json())
      .then((data) => {
        this.setState({ ida: data.next, url: data.next });
        this.getPokemons();
        this.setState({ pokemons: data.results })
      });
  }

  voltar = async () => {
    fetch(`${this.state.url}`)
      .then(data => data.json())
      .then((data) => {
        if(data.previous != null){
          this.setState({ volta: data.previous, url: data.previous });
          this.getPokemons();
          this.setState({ pokemons: data.results })
        }
      });
  }

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    return (
      <div className="containerx">
        <div className="listagem">
          <div className="radio" style={{marginRight: 20}}>
            <label><input type="radio" name="optradio" checked="checked"/>  Numeração</label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio"/>  A-Z</label>
          </div>
        </div>
        <div className="irvoltar">
          <a href="#" onClick={this.voltar.bind(this)}><i class="material-icons" style={{fontSize:48}}>keyboard_arrow_left</i></a>
          <a href="#" onClick={this.ir.bind(this)}><i class="material-icons" style={{fontSize:48}}>keyboard_arrow_right</i></a>
        </div>
          {
            this.state.pokemons.map(function(pokemon, index) {
            return (
              <Item_List name={pokemon.name} urlPokemon={pokemon.url} key={index}/>
            )
            }) 
          }
      </div>
    );
  }
}

export default List;