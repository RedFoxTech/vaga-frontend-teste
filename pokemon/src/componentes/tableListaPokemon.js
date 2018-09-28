import React, { Component } from 'react';
import ReactTable from '../utils/reactTable'
import "react-table/react-table.css";
import Pokebola from "../imagens/pokebola.png"
import './estilo.css'

class TableListaPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaPoke: [{name: 'Bulbasaur', foto:<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></img>}]
          }

    }
    render() { 
        const { listaPoke } = this.state
        return ( 
            <div className="reactTable">
                <ReactTable 
                    data={listaPoke}
                    columns={[
                        {
                            accessor: "foto",
                            Header: "Foto",
                            maxWidth: 100
                        },
                        {
                            accessor: "name",
                            Header: "Nome do Pokémon"
                            
                        },
                        {
                            accessor: "acoes",
                            maxWidth: 90,
                            Cell: props => {
                                return(
                                    <div>                                        
                                        <img src={Pokebola} width="30%" height="30%"></img>                                        
                                    </div>
                                )                                                
                            }
                        }]} 
                />
            </div>
         );
    }
}
 
export default TableListaPokemon;