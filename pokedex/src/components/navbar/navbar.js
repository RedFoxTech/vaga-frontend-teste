import React from 'react';
import './navbar.css'


class NavBar extends React.Component{
    render () {
      return(
      <nav className="navbar">
          <img className="navLogo"src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"/>
          <ul className="nav-lista">
            <li className="nav-item">Uma pokedéx pra chamar de sua!</li>
          </ul>
      </nav>
      )
    }
  }

export default NavBar
