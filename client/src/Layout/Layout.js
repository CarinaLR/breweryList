import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./List";
import SingleBrewery from "./SingleBrewery";
import brewery_logo from "../assets/brewery_logo.png";
import background from "../assets/pub_1.jpg";
import "../App.css";

//Specify the routes for our components, here we set each component to a specific path and a specific component, this allows us to switch components accordingly.
export class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <header className=" container-fluid jumbotron jumbotron-fluid jumbotron-header text-center">
            <div className="flex-align-center mgn-btt">
              <img
                src={brewery_logo}
                alt="..."
                className="img-thumbnail image-header"
              ></img>
            </div>
          </header>

          <section
            className="container-fluid text-center mb-4"
            style={{ backgroundImage: `url(${background})` }}
          >
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
