import React, { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Header />
        <Search />
        <List />
      </div>
    );
  }
}

export default App;
