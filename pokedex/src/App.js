import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/layout/NavBar";
import Index from "./components/layout/Index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Index />
      </div>
    </div>
  );
}

export default App;
