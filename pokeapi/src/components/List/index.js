import React, { Component } from 'react';

import './styles.css';

import Item_List from './components/Item_List';

class List extends Component {

  constructor() {
    super();
    
    this.state = {
      pokemons: [],
    }
  }

  getPokemons = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(data => data.json())
      .then((data) => {
        //console.log(results);
        this.setState({ pokemons: data.results });
      });
      // const response = await api.get(`1`);
      // console.log(response);
      // this.setState({ pokemons: response.data });

      // .then(results => console.log(results))
      // .then(results => this.setState({pokemons: results.body.Search}));
      //console.log(this.state.pokemons);
  }

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    return (
      <div className="containerx">
        <div className="listagem">
          <div className="radio" style={{marginRight: 20}}>
            <label><input type="radio" name="optradio"/>  Numeração</label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio"/>  A-Z</label>
          </div>
        </div>
          {
            this.state.pokemons.map(function(pokemon, index) {
            return (
              <Item_List namePokemon={pokemon.name} urlPokemon={pokemon.url} key={index}/>
              // <div key={index}>
              //   <h2>{pokemon.name}</h2>
              // </div>
            )
          }) 
          //console.log(this.state.pokemons)
          }
      </div>
    );
  }
}

export default List;