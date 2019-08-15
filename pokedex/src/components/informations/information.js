import React from 'react'
import './information.css'


class Information extends React.Component {
    constructor(){
      super()
      this.state={
        dataImg: [],
      }
    }
  
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
        const {dataImg} = this.state
        return(
            <div>
                <img src={dataImg} />
            </div>
        )
    }
}

export default Information