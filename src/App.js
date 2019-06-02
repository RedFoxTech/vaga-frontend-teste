import React from 'react';
import logo from './logo.png';
import Navbar from '../src/components/Navbar/Navbar';
import Pesquisa from '../src/components/Pesquisa/Pesquisa';
import Cards from '../src/components/Cards/Cards';
import Footer from '../src/components/Footer/Footer';
import Lista from '../src/components/Lista/Lista';
import './App.css';


function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Pesquisa />
        <main role="main">
          <Cards />
        </main>
        <Footer />
    </div>
  );
}

export default App;
