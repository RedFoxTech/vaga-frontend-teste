import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import { Loading,List,Pokemon } from './styles';
import Container from '../../components/Container/index';

export default class Pokemons extends Component{
  state = {
    pokemon: {},
    loading: true,
  }
  async componentDidMount(){
    const { match} = this.props;
    const pokeName = match.params.name;
    const response = await api.get(`pokemon/${pokeName}`);
    const {name,order,weight,abilities} = response.data;
    const {front_default} = response.data.sprites;   
    const img = front_default
    const data = { name ,order, weight,abilities,img};
    this.setState({
      pokemon: data,
      loading: false
    });

   // data.abilities.forEach(ability => {
    //    console.log(ability.ability.name);
    //});
  }

  render(){
    const {pokemon,loading} = this.state;

    if(loading){
      return <Loading>Carregando...</Loading>
    }

    return (<Container>
        <Pokemon>
          <Link to = "/">Voltar</Link>
          <img src={pokemon.img} alt="poke"/>
          <h1>{pokemon.name}</h1>
          <p>Order:{pokemon.order}</p>
          <p>Weigh:{pokemon.weight}</p>
          <h2>Habilidades: </h2>
          <List>
          {
            pokemon.abilities.map(ability =>(
              <li key = {ability.ability.name}>
                <span>{ability.ability.name}</span>
              </li>
            ))
          }
          </List>     
        </Pokemon>
      </Container>);
  }
}
