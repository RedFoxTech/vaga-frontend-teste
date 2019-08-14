import React, {Component} from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Banner from '../src/components/Banner/Banner';

import Footer from '../src/components/Footer/Footer';
import Lista from '../src/components/Lista/Lista';

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="App">

          <Navbar />
          <Banner />

          <main role="main">
            <Lista />
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;
