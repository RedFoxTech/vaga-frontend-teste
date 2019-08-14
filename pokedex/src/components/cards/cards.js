import React from 'react';
import './cards.css'


const comentario1 = 
  {
    autora: {
      nome: 'Mellina',
      imagem: 'https://t2.ea.ltmcdn.com/pt/images/3/9/6/img_meu_gatinho_chora_muito_e_normal_21693_600.jpg'
    },
    subtitulo: 'AMEI ESSE VÍDEO KERO +++',
    texto: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Leite de capivaris, leite de mula manquis sem cabeça. Si num tem leite então bota uma pinga aí cumpadi! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.'
  }


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
  