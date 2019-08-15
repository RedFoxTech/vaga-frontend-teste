import React from 'react';
import './cards.css'



class Card extends React.Component {
    render() {
      return (
        <div className="comentario" id="comentario">
          <img className="comentario__perfil" src={this.props.imagem} />
          <div>
            <h2 className="comentario__nome">{this.props.nome}</h2>
            <hr />
            <p>{this.props.comentario}</p>
          </div>
        </div>
      )
    }
  }

export default Card
  