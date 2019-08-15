import React from 'react';
import Card from './components/cards/cards'
import './App.css';
import Information from './components/informations/information';
import NavBar from './components/navbar/navbar';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      names:[],
    }
  }

  componentWillMount(){
    const id=[1,2,3,4,5]
    id.map(function(ids){
      fetch(`https://pokeapi.co/api/v2/pokemon/${ids}`)
      .then((response)=>{
           console.log(response) 
          return response.json()
          .then((data) =>{
            this.setState({names:data.name}).bind(this)




            console.log(data.name)
            console.log(data.abilities)
            console.log(data.sprites.front_default)
          })
      }) 
    })
  }
  render(){
    const names=this.state
    return(
      <div>
        <NavBar/>
        <div className="container">
            <Card
            /* imagem={img[0]} */
            nome={names[0]}
            /* comentario={habi[0]} */
            />
        </div>    
      </div>
    )
  }  
}

export default App;


