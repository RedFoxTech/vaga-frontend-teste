import React, { Component } from 'react';

import './styles.css';


class Search extends Component {
  render() {
    return (
      <div class="container">
        <h1>Procure aqui seu Pokémon!</h1>
        <div class="pesquisa">
          <input style={{marginRight: 10}} type="text" class="form-control" id="usr" placeholder="Digite o Pokémon" />
          <span class="input-group-btn"><button onClick="interactive_call();return false;" class="btn btn-primary">Pesquisar</button></span>
        </div>
      </div>
    );
  }
}

export default Search;