import React, { Component } from 'react';
import "./App.css";
import Groceries from './Groceries';
import data1 from './groceriesList.jsx';

class App extends Component {

  state = {
    data1: data1,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false
  }

  handlechange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handlesubmit = (event) => {
    event.preventDefault();
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity
    }
    this.setState({
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false,
      data1: [newItem, ...this.state.data1]
    })
  };

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handlesubmit}>
          <h1> Add item </h1>
          <label> Item: </label>
          <input type="text" value={this.state.data1.item} onChange={this.handlechange} id="item" />
          <br />
          <label> Brand: </label>
          <input type="text" value={this.state.data1.brand} onChange={this.handlechange} id="brand" />
          <br />
          <label> Units: </label>
          <input type="text" value={this.state.data1.units} onChange={this.handlechange} id="units" />
          <br />
          <label> Quantity: </label>
          <input type="text" value={this.state.data1.quantity} onChange={this.handlechange} id="quantity" />
          <br />
          <button type='submit' value='submit'> Submit </button>
        </form>

        <div className="">
          <h1>Groceries List: </h1>
          <ul>
            {this.state.data1.map((groceries, index) => {
              return (
                <Groceries groceries={groceries} />)
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;