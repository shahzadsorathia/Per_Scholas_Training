import React, { Component } from 'react';

class Groceries extends Component {

    
    render() {
        return (
            <div className="groceries">
                <div>
                <h2>Item: {this.props.groceries.item} </h2>
                <h2>Brand:{this.props.groceries.brand}</h2>
                <h2>Units: {this.props.groceries.units}</h2>
                <h2>Quantity:{this.props.groceries.quantity}</h2>
            </div>
            </div>
        );
    }
}

export default Groceries;