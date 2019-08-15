import React from 'react';
import './cards.css'



class Card extends React.Component {
    render() {
      return (
        <div className="card" id="card">
          <img className="card__perfil" src={this.props.imagem} />
          <div>
            <h2 className="card__nome">{this.props.nome}</h2>
            <hr />
            <p>{this.props.habilidade}</p>
          </div>
        </div>
      )
    }
  }

export default Card
  