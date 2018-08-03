import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return(
      <div>
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  }
}

export default Loader;