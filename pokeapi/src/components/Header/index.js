import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Pokémon Wiki</h5>
      </div>
    );
  }
}

export default Header;
