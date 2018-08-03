import React, { Component } from 'react';
import axios from 'axios';
import {Link}  from 'react-router-dom'

class PokemonView extends Component {

  constructor(props) {
    super(props);

    this.state = {pokemon: {}};
  }

  componentDidMount(){
    axios.get(this.props.url)
      .then(res => {
        this.setState({ pokemon: res.data });
      });
  }

  render() {

    let imageEl = <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="img"/>
    let id;
    if (this.state.pokemon.id) {
      imageEl = <img src={this.state.pokemon.sprites.front_default} alt=""/>
      id = this.state.pokemon.id;
    }

    return( 
      <div className="card">
        <div className="card-image">
          {imageEl}
        </div>
        <div className="card-content">
          <p>{this.props.name}</p>
          <Link to={{ pathname: '/pokemon/' + id }} >Details</Link>
        </div>
      </div>
    )
  }

}

export default PokemonView;