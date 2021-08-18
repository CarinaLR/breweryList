import React, { Component } from "react";
import List from "./List";
import "../App.css";

export class Layout extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>BREWERIES</code>
          </p>
        </header>
        <section>
          <div className="home-container">
            <List />
          </div>
        </section>
      </div>
    );
  }
}

export default Layout;
