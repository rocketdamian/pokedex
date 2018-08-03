import React, { Component } from 'react';
import axios from 'axios';

import Loader from '../components/Loader'
import PokemonDisplayDetails from '../components/PokemonDisplayDetails'
class PokemonDetailsView extends Component {
  constructor(props) {
    super(props);

    this.state = {pokemon: {}};
  }

  fetchPokemonData() {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.id + "/")
    .then(res => {
      this.setState({ pokemon: res.data });
    });
  }

  componentDidMount(){
    this.fetchPokemonData();
  }

  render() {
    let content = <Loader />
    if (this.state.pokemon.id) {
      content = <PokemonDisplayDetails data={this.state.pokemon} />
    }
    return(
      <div className="container">
        <div className="row">
          {content}
        </div>
      </div>
    )
    
  }
}

export default PokemonDetailsView;