import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { Component } from "react";
import Navigation from "./components/navbar";
import Dashboard from "./components/dashboard";
import Pokemon from "./components/pokemon/pokemon";
import Pokemons from "./components/pokemon/Pokemons";
import Type from "./components/types/type";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/types/:typeName/" component={Type} />
            <Route exact path="/pokemons/" component={Pokemons} />
            <Route exact path="/pokemons/:pokemonIndex/" component={Pokemon} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
