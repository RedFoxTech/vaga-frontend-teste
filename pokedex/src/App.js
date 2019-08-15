import React from 'react';
import Card from './components/cards/cards'
import './App.css';
import Information from './components/informations/information';
import NavBar from './components/navbar/navbar';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: [],
      name:"",
      dataImg: [],
    }
  }
  componentWillMount(){
   
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name1:data.name.toUpperCase()})
            this.setState({dataImg:data.sprites.front_default}) 
          })
      })

    
      fetch('https://pokeapi.co/api/v2/pokemon/2')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name2:data.name.toUpperCase()})
            this.setState({dataImg2:data.sprites.front_default}) 
          }) 
      })

      fetch('https://pokeapi.co/api/v2/pokemon/3')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name3:data.name.toUpperCase()})
            this.setState({dataImg3:data.sprites.front_default}) 
          }) 
      })

      fetch('https://pokeapi.co/api/v2/pokemon/4')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name4:data.name.toUpperCase()})
            this.setState({dataImg4:data.sprites.front_default})
          })   
      })

      fetch('https://pokeapi.co/api/v2/pokemon/5')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name5:data.name.toUpperCase()})
            this.setState({dataImg5:data.sprites.front_default})
          })   
      })
      fetch('https://pokeapi.co/api/v2/pokemon/6')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name6:data.name.toUpperCase()})
            this.setState({dataImg6:data.sprites.front_default})
          })   
      })
      fetch('https://pokeapi.co/api/v2/pokemon/7')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name7:data.name.toUpperCase()})
            this.setState({dataImg7:data.sprites.front_default})
          })   
      })
      fetch('https://pokeapi.co/api/v2/pokemon/8')
      .then((response)=>{
          console.log(response)
          return response.json()
          .then((data) =>{
            this.setState({name8:data.name.toUpperCase()})
            this.setState({dataImg8:data.sprites.front_default})
          })   
      })
  }

  /* TENTATIVA DE AUTOMAÇÃO*/
   /* componentWillMount(){
    let self = this
    const id=[1,2,3,4,5]
    id.map(function(ids){
      fetch(`https://pokeapi.co/api/v2/pokemon/${ids}`)
      .then((response)=>{
          console.log(response) 
          return response.json()
          .then((data) =>{
           self.setState({names:data.name})
           self.setState({dataImg:data.sprites.front_default})

            console.log(data.name)
            console.log(data.abilities)
            console.log(data.sprites.front_default)
          })
      }) 
    }) */

  /* {data.map((pokemon) => {
    return(
    <div>
      <Card
      imagem={dataImg} 
      nome={pokemon.name.toUpperCase()}
      comentario={pokemon.url} 
    /> */
  render(){
    const {data} = this.state
    const {name1, name2, name3, name4, name5, name6, name7, name8} = this.state
    const {dataImg, dataImg2, dataImg3, dataImg4, dataImg5, dataImg6, dataImg7, dataImg8} = this.state
    return(
      <div>
        <NavBar/>
        <div className="container">
            <Card
            imagem={dataImg} 
            nome={name1}
            comentario={name1} 
            />
            <Card
              imagem={dataImg2} 
              nome={name2}
              comentario={name2} 
            />
            <Card
              imagem={dataImg3} 
              nome={name3}
              comentario={name3} 
            />
            <Card
              imagem={dataImg4} 
              nome={name4}
              comentario={name4} 
            />
        </div>
        <div className="container">
          <Card
            imagem={dataImg5} 
            nome={name5}
            comentario={name5} 
          />
          <Card
            imagem={dataImg6} 
            nome={name6}
            comentario={name6} 
          />
          <Card
            imagem={dataImg7} 
            nome={name7}
            comentario={name7} 
          />
          <Card
            imagem={dataImg8} 
            nome={name8}
            comentario={name8} 
          />
        </div>
      </div>    
    )
  }  
}

export default App;

