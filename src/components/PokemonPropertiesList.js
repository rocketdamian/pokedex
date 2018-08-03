import React, { Component } from 'react';

class PokemonPropertiesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const setData = function(value) {
      if (value) {
        return ": " + value;
      }
    }
    
    const { list } = this.props;

    return(
      <div className="col s12">
        <h5 className="left-align teal-text">{this.props.title}</h5>
        <ul className="collection">
          {list.map(item =>
            <li key={item[this.props.listProperty].name} className="collection-item">
            {item[this.props.listProperty].name}
            {setData(item[this.props.dataProp])}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default PokemonPropertiesList;