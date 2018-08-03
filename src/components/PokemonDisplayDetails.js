import React, { Component } from 'react';

import PokemonPropertiesList from './PokemonPropertiesList'

class PokemonDisplayDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="col s6">
          <h1 className="blue-text">{this.props.data.name}</h1>
          <div className="divider"></div>
          <img className="materialboxed" width="100%" src={this.props.data.sprites.front_default} />
        </div>
        <div className="col s6">
          <div className="row">
            <PokemonPropertiesList title="Types" list={this.props.data.types} listProperty="type" />
            <PokemonPropertiesList title="Abilities" list={this.props.data.abilities} listProperty="ability" />
            <PokemonPropertiesList title="Moves" list={this.props.data.moves} listProperty="move" />
            <PokemonPropertiesList title="Stats" list={this.props.data.stats} listProperty="stat" dataProp="base_stat" />
          </div>
        </div>
      </div>
      
    )
  }
}

export default PokemonDisplayDetails;