import React, { Component } from "react";
import styled from "styled-components";

export default class extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark teal lighten-2 mb-4">
        <a className="navbar-brand" href="http://localhost:3000/">
          Pokedex
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline ml-auto">
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Enter pokemon name"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}
