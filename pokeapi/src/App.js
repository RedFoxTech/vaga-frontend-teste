import React, { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div class="containerA">
        <Header />
        <div class="container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
