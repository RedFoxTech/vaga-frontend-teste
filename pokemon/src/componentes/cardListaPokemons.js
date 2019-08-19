import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './estilo.css'
import TableListaPokemon from './tableListaPokemon2'

class CardListaPokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Card className="cardLista" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                    <CardContent>
                        <TableListaPokemon />
                    </CardContent>
                </Card>
            </div>
         );
    }
}
 
export default CardListaPokemons;