import React from 'react'
import {Component} from 'react'
import './Pesquisa.css'

class Pesquisa extends Component{
    render(){
        return (
           <pesquisa>
    
        <section className="jumbotron text-center">
            <div className="container">
            <h1 className="Marketing jumbotron-heading">Pokémon</h1>
                <p className="Marketing"> Separamos alguns Pokémons para você, mas tem muitos mais esperando por você. Busque o seu preferido! Pokémon temos que pegar!!</p> 
                <form className="col-md-6 offset-md-3">
                  <input className="form-control mr-sm-2-p-2" type="text" placeholder="Pesquisa" aria-label="Search" />
                    <button className="btn btn-outline-danger my-3 my-sm-12" type="submit">Pesquisar</button>
                </form>
        </div>
      </section>
      
      </pesquisa>
        )
    }
}

export default Pesquisa