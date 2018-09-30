import React, { Component } from 'react';
import Card from './Card.js';

export default class Pokedex extends Component{
    render(){
        let pokeList;
        if(this.props.pokemon){
            pokeList = this.props.pokemon.map(pokemon => {
                return(
                    <Card key={pokemon.name} pokemon={pokemon}/>
                );
            });
        }
        return (
            <div id="pokedex">
                <div>
                    {pokeList}
                </div>
            </div>
        )
    }
}