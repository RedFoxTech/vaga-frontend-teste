/* tentativa de automação */

/* import React from 'react'
import './information.css'
import Card from '../cards/cards'


class Information extends React.Component {
    constructor(){
      super()
      this.state={
        nome: [],
        dataImg: [],

      }
    }
    componentWillMount(){
    let self = this
    const id=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    id.map(function(ids){
      fetch(`https://pokeapi.co/api/v2/pokemon/${ids}`)
      .then((response)=>{
          console.log(response) 
          return response.json()
          .then((data) =>{
           self.setState({dataImg:data.sprites.front_default})
            self.setState({nome:data.name})
            console.log(data.name)
            console.log(data.abilities)
            console.log(data.sprites.front_default)
          })
      }) 
    })
    } 
    /*
    componentWillMount(){
      fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then((response)=>{
          console.log(response)
          return response.json()
      })

      .then((data) =>{
        console.log(data.abilities)
        this.setState({dataImg:data.sprites.front_default}) 
      }) 
    }
    

    render(){
      const {name}=this.state
        const {dataImg} = this.state
        return(
          <div>
            <Card
              nome={name}
              imagem={dataImg}
            />
          </div>
            
        )
    }
}

export default Information */