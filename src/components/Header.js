import React, { Component } from 'react';
import logo from '../assets/pokemon-logo.png';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Bem-vindo ao Pokéapi com React</h1>
        </header>
    )
  }
  
  
  export default Header;