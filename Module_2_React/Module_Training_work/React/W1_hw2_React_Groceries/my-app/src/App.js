import React, { Component } from 'react';
import Groceries from './Groceries';
import groceriesList from './groceriesList.jsx';
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


  render() {

    return (
      <div className="main">
        
          <form>
            <h1> Add item </h1>
            <label> Brand: </label>
            <input type="text" />
            <br />
            <label> Units: </label>
            <input type="text" />
            <br />
            <label> Quantiy: </label>
            <input type="text" />
            <br />
          </form>
       

        <div>
          {this.state.data1.map((groceries) => {
            return (<Groceries groceries={groceries} />)
          })}
        </div>



      </div>
    );


  }
}
export default App;

