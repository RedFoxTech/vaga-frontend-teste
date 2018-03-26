import React, { Component } from 'react';

import './styles.css';

class Modal extends Component {
  render() {
    return (
      <div class="modal">
        <div class="modal-content">
          <a class="closeBtn" onClick={this.props.fechar}>&times;</a>
          <div class="texto">
            <ul>
              <li>Nome do Pokémon: {this.props.nome}</li>
              <li>Peso: {this.props.peso}</li>
              <li>Tipo: {this.props.tipo}</li>
              <li>Habilidade: {this.props.habilidade}</li>
            </ul>
          </div>
          <div class="foto">
            <img
              style={{ marginRight: 10}}
              src={this.props.foto}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;