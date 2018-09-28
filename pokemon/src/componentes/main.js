import React, { Component } from 'react';
import CardListaPokemons from './cardListaPokemons';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <CardListaPokemons />
            </div>
         );
    }
}

export default Main;