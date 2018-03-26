import React, { Component } from 'react';
import List from '../List';
import './styles.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pesquisar: false,
    }
  }

  pesquisar() {
    this.setState({ pesquisar: true });
  }

  listarTodos() {
    this.setState({ pesquisar: true, url: 'https://pokeapi.co/api/v2/pokemon/' });
  }

  render() {
    return (
      <div class="container">
        <h1>Procure aqui seu Pokémon!</h1>
        <div class="pesquisa">
          <span style={{marginRight: 10}} class="input-group-btn"><button onClick={this.pesquisar.bind(this)} class="btn btn-success">Listar Todos</button></span>
          <input onInput={(e) => this.setState({texto: e.target.value})} style={{marginRight: 10}} type="text" class="form-control" id="usr" placeholder="Digite o Pokémon" />
          <span class="input-group-btn"><button onClick={this.pesquisar.bind(this)} class="btn btn-primary">Pesquisar</button></span>
        </div>
        { this.state.pesquisar == true && <List url={this.state.url} />}
      </div>
    );
  }
}

export default Search;