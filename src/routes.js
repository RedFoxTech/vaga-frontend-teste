import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Pokemons from './pages/Pokemons';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Main}/>
        <Route path="/pokemons/:name" component = {Pokemons}/>
      </Switch>
    </BrowserRouter>
  );
}