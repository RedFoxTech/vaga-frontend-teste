import React, {Component} from 'react';

import Cards from '../Cards/Cards';
import Pokedex from 'pokedex-promise-v2';

class Lista extends Component{

    constructor(props) {
        super(props);

        this.P_API = new Pokedex();
        this.state = {
          pokemons: this.props.pokemons || []
        };
    }
    componentDidMount (){
        if (!this.state.pokemons.length){
            this.search();
        }
    }

    search(){
        console.log("Buscando na API")
     
        let self = this;
        this.P_API.getPokedexByName('kanto')
        .then(function(response) {
          
          let s_pockemons = self.state.pokemons;
          response.pokemon_entries.map((pokemon) => {
              s_pockemons.push({
                      name: pokemon.pokemon_species.name,
                      p_id: pokemon.entry_number
                  })
          })
          self.setState({pokemons: s_pockemons})
        })
        .catch(function(error) {
          console.log('There was an ERROR: ', error);
        });   
    }

    render(){
        return (
            <div className="container">
              <div className="row">
                {this.state.pokemons.map((item, i) => {
                  return (
                    <div className="col-lg-4" key={i}>
                      <Cards pokemon={item} />
                    </div>
                  );
                })}
              </div>
            </div>
        )
    }
}

export default Lista