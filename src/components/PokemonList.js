import React, { Component } from 'react';
import axios from 'axios';

import PokemonView from './PokemonView';

class PokemonList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      list: [],
      pageLimit: 48,
      pageOffset: 0,
      isLoading: false
    };
  }

  fetchPokemonList(limit, offset) {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=' + limit + "&offset=" + offset)
    .then(res => {
      res.data.results.map(pokemon =>
        this.state.list.push(pokemon)
      );
      this.setState({
        pokemons: this.state.list,
        isLoading: false
      });
    });
  }

  componentDidMount(){
    this.fetchPokemonList(this.state.pageLimit, this.state.pageOffset);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100) &&
      this.state.pokemons.length > 0 && !this.state.isLoading
    ) {
      this.setState({
        'pageOffset': this.state.pageOffset + this.state.pageLimit,
        'isLoading': true
      });
      this.fetchPokemonList(this.state.pageLimit, this.state.pageOffset);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.pokemons.map(pokemon =>
            <div key={pokemon.name} className="col s2">
              <PokemonView  url={pokemon.url} name={pokemon.name} />
            </div>
          )}
        </div> 
      </div>
    )
  }
}

export default PokemonList;