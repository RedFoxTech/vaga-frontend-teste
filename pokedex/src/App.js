import React from 'react';
import Card from './components/cards/cards'
import './App.css';

 const comentario1 = 
  {
    autora: {
      nome: 'Mellina',
      imagem: 'https://t2.ea.ltmcdn.com/pt/images/3/9/6/img_meu_gatinho_chora_muito_e_normal_21693_600.jpg'
    },
    subtitulo: 'AMEI ESSE VÍDEO KERO +++',
    texto: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Leite de capivaris, leite de mula manquis sem cabeça. Si num tem leite então bota uma pinga aí cumpadi! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.'
  } 

class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: [],
      imgs:""
    }
  }
  componentWillMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
      this.setState({data:data.results})
      console.log(data.results)
    })
      
  }
  
  render(){
    const {data} = this.state
    return(
        <div>
          {data.map((pokemon) => {
            return(
              <Card
              /* imagem={pokemon} */
              nome={pokemon.name}
              /* comentario={pokemon.url} */
            />
            )
          })
        }
        </div>
    )
  }
}


export default App;

