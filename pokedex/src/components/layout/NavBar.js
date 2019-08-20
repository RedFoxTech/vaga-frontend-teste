import React, { Component } from "react";
import styled from "styled-components";

export default class extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a>Pokedex</a>
        </nav>
        <div className="page_search">
          <input type="text" placeholder="Enter pokemon name" value="" />
        </div>
      </div>
    );
  }
}
