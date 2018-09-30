import React, { Component } from 'react';
import $ from 'jquery';
import './css/styles.css';
import Pokedex from './components/Pokedex';

class App extends Component {
  
  constructor(){
    super();
    this.state = {pokelist: {
      count: '',
      next: '',
      previous: '',
      results: [],
      offset: 0,
      pokeInfo: {}
      },
      search: ''
    }    
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  componentDidMount() {
    document.title = 'PokeFox'
    $.ajax({
      // url: 'https://pokeapi.co/api/v2/pokemon/?limit=35&offset=0',
      url: 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=30&offset=0',
      dataType: 'json',
      success: function (data) {
        this.setState({ pokelist: data });
      }.bind(this)
    });
  }

  render() {
    return (
          <div className="pdd-30-lg-t pdd-30-md-t">
            <div className="col-md-10 col-lg-10 col-lg-offset-1 col-md-offset-1">
              <div className="container-fluid pdd-30-lg-b pdd-30-md-b">
                <div className="navbar navbar-default navbar-fixed-top">
                  <div className="col-lg-offset-1 col-md-offset-1 col-md-3 col-lg-3 ">
                    <h1 className="text-danger text-bold text-bold">PokeFox</h1>
                  </div>
                  <div className="col-md-8 col-lg-8 col-xxs-10 col-xs-10 pdd-15-md-b pdd-15-lg-b pdd-15-md-t pdd-15-lg-t">
                    <input type="text" className="bg-input text-danger" placeholder="digite o pokémon que deseja procurar" value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
                  </div>
                </div>
                <div className="pdd-100-md-t pdd-100-lg-t pdd-100-xs-t pdd-100-xxs-t"></div>
                  <Pokedex pokemon={this.state.pokelist.results.
                        filter(
                          (pokeSearch) => {
                            return pokeSearch.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;                         
                          }  
                        )
                  }/>
              </div>
            </div>
          </div>
    ); 
  } 
 
}

export default App;
