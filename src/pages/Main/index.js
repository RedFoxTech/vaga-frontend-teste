import React , {Component } from 'react';
import {Form, SearchButton,List} from './styles';
import Container from '../../components/Container/index';
import {Link} from 'react-router-dom';

import api from '../../services/api';

export default class Main extends Component {
  state = { 
    pokeInput: '',
    types: { 'normal' : '1',
      'fighting' : '2',
      'flying' : '3',
      'poison' : '4',
      'ground' :'5',
      'rock': '6',
      'bug': '7',
      'ghost':'8',
      'steel':'9',
      'fire': '10',
      'water': '11',
      'grass': '12',
      'electric':'13',
      'psychic':'14',
      'ice':'15',
      'dragon':'16',
      'dark':'17',
      'fairy':'18',
      'unknown':'10001',
      'shadow':'10002'
    },
    pokemonsList: [],
  };

  componentDidMount(){
    const pokemonsList = localStorage.getItem('pokemons');

    if(pokemonsList){
      this.setState(
        {pokemonsList: JSON.parse(pokemonsList)}
      )
    }
  }

  componentDidUpdate(_,prevState){ 
    const {pokemonsList} = this.state;
    if(prevState.pokemonsList !== pokemonsList){
      localStorage.setItem('pokemons',JSON.stringify(pokemonsList));
    }
  }

  handleInput = e => {
    this.setState({
      pokeInput: e.target.value
    });
  }

  handleSearch = async e => {
    e.preventDefault();

    this.setState({loading:true});

    const selected = this.state.pokeInput;
    if(!selected)
      return alert('Favor digite um nome !');
    const {pokemonsList,types} = this.state;
    
    if (selected in this.state.types)
      {
        const response = await api.get(`type/${this.state.types[selected]}`)
        
        console.log(response.data);
      }
    else if (selected.toUpperCase === 'TODOS'){
        const response = await api.get(`pokemon`)    
        console.log(response.data);
    }
    else{
      const response = await api.get(`pokemon/${selected}`)
      const {name} = response.data;
      const {front_default} = response.data.sprites;
      const data = {
        name,
        img: front_default
      }
      console.log(data)
      this.setState({
        pokemonsList: [...pokemonsList, data],
        pokeInput: '',
        loading: false,
        types,
      });
    }
    //console.log(this.state.pokeInput);
  }

  render(){
    const {pokeInput, pokemonsList} = this.state;

    return (
      <Container>     
        <h1>
        <img src={require('../../images/pokeball.png')} alt = "pokeballimg" width = "24" height = "24"/>
          Pokemons
        </h1>
        <Form onSubmit ={this.handleSearch}>
          <input
            type="text"
            placeholder="Buscar e armazenar pokemon"
            value = {pokeInput}
            onChange = {this.handleInput}
          />
          <SearchButton >
              <img src={require('../../images/lupa.png')} alt="lupaimg"/>
          </SearchButton>
        </Form>
        <List>
          {pokemonsList.map(pokemon =>(
            <li key={pokemon.name}>
              <img src = {pokemon.img} alt = 'img' width = "50" height = "50"/>              
                <span>{pokemon.name}</span>
                <Link to ={`pokemons/${pokemon.name}`}>Informações</Link>
            </li>
          ))}
        </List>
      </Container>
    )
  }
};