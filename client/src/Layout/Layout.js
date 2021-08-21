import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./List";
import SingleBrewery from "./SingleBrewery";
import "../App.css";

export class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <header className="container-fluid">
            <div className="jumbotron jumbotron-fluid jumbotron-header text-center">
              <code>
                <h1>
                  <il className="fas fa-beer"></il>
                  <hr></hr>TOP NY BREWERIES
                </h1>
              </code>
            </div>
          </header>

          <section className="container text-center mb-4">
            <div>
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
