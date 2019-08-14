import React from 'react'
import {Component} from 'react'

import Pokedex from 'pokedex-promise-v2';

import './Cards.css'

class Cards extends Component{
    
    constructor(props) {
        super(props);

        this.P_API = new Pokedex();
        this.state = {};
        this.get_detailsPokemon(this.props.pokemon.p_id);
    }
    
    get_detailsPokemon(p_id){
        
        let self = this
        this.P_API.getPokemonByName(p_id)
        .then(function(response) {
          self.setState({pokemon: response})
        })
        .catch(function(error) {
          console.log('There was an ERROR: ', error);
        });
    }
    
    render(){
        let pokemon = this.state.pokemon;
        return (
          <div className="pokemon-card marketing">
            { pokemon && <div className="container">
                    <div className="row">
                        <div className="col col-lg-6">
                    
                            <img className="rounded-circle float-left" src={pokemon.sprites.front_default} width="140" height="140"/>
                            <span className="badge badge-success ml-2"><i className="fas fa-id-badge p-1"></i>{pokemon.name}</span>
                
                            <div className="healthy">
                                <span className="badge badge badge-warning">Altura: <i className="fas fa-arrows-alt-v p-1"></i>{pokemon.height}</span>
                                <span className="badge badge badge-danger">Peso: <i className="fas fa-weight p-1"></i>{pokemon.weight}</span>
                            </div>
                        </div>
                        <div className="col col-lg-6">
                            {pokemon.types.map((type, i)=>{
                                return (
                                    <div className="poketype alert alert-warning" role="alert" key={i}> Tipo: {type.type.name}</div>
                                )
                            })}
                            {pokemon.abilities.map((ability, i)=>{
                                return(
                                    <div className="pokeability alert alert-success" role="alert" key={i}>Habilidades: {ability.ability.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </div> || <div className="alert alert-primary" role="alert">Carregando... </div>
            }    
          </div>
        )
    }
}

export default Cards