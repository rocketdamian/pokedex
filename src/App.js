import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Route, Switch } from 'react-router-dom'

// component
import PokemonList from './components/PokemonList'
import PokemonDetailsView from './components/PokemonDetailsView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Switch>
          <Route exact path="/" component={PokemonList}/>
          <Route exact path="/pokemon/:id" component={PokemonDetailsView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
