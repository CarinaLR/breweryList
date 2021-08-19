import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./List";
import SingleBrewery from "./SingleBrewery";
import "../App.css";

export class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              <code>BREWERIES</code>
            </p>
          </header>
          <section className="text-center mb-4">
            <div className="home-container">
              <Switch>
                <Route path="/brewery/:id" component={SingleBrewery} />
                <Route path="/breweries" component={List} />
                <Route path="/">
                  <List />
                </Route>
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default Layout;
