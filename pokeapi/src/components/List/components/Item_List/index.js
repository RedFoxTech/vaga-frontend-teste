import React, { Component } from 'react';

import './styles.css';

import Modal from './components/Modal';


class Item_List extends Component {
  constructor(props) {
    super();
    
    this.state = {
      show: false,
      pokemonInfo: [],
      ...props.urlPokemon,
    }
  }

  abrirModal(){
    this.setState({show: true});
    console.log(this.state.maisInfo);
  }

  fecharModal() {
    this.setState({show: false});
    console.log(this.state.maisInfo);
  }
  
  getMoreInformation = async () => {
    let url = this.props.urlPokemon
    fetch(`${url}`)
      .then(data => data.json())
      .then((data) => {
        this.setState({ pokemonInfo: data })
        console.log(this.state.pokemonInfo)
      });
  }

  componentDidMount() {
    this.getMoreInformation();
  }

  render() {
    return (
      <div class="containera">
        <div class="item">
          <a onClick={this.abrirModal.bind(this)} href="#" class="button">
            <span style={{fontSize: 20}}>{this.props.name}</span>
          </a>
        </div>
        {
          this.state.show 
          &&
          <Modal 
            fechar={this.fecharModal.bind(this)} 
            nome={this.state.pokemonInfo.name}
            peso={this.state.pokemonInfo.weight}
            tipo={this.state.pokemonInfo.types[0].type.name}
            habilidade={this.state.pokemonInfo.abilities[0].ability.name}
            foto={this.state.pokemonInfo.sprites.front_default}
          />
        }
      </div>
    );
  }
}

export default Item_List;