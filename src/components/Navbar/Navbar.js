import React from 'react'
import {Component} from 'react'
import pokeball from './pokeball.png'
import './navbar.css'

class Navbar extends Component{
    render(){
        return (
           <header>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                      <a href="#" className="navbar-brand d-flex align-items-center">
                        <img className="rounded" src={pokeball} width="30" height="30" />
                        <strong>POKÉMON</strong>
                      </a>
                    </div>
                  </div>    
           </header>        
        )
    }
}

export default Navbar
 