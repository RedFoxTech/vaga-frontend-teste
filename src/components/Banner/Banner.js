import React from 'react'
import {Component} from 'react'
import './Banner.css'

class Banner extends Component{
    
    render(){
        return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="Marketing jumbotron-heading">Pokémon</h1>
                <p className="Marketing"> Separamos alguns Pokémons para você, mas tem muitos mais esperando por você. Busque o seu preferido! Pokémon temos que pegar!!</p> 
            </div>
        </section>
        )
    }
}

export default Banner