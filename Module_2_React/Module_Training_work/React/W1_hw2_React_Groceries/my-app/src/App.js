import React, { Component } from 'react';
import data from './data';
import Groceries from './Groceries';

class App extends Component {

 
  render() {
    return (
      <div>
        <Groceries Groceries={this.state.data1} />
      

      </div>
    );
  }
}

export default App;

