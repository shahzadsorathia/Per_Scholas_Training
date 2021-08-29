import React, { Component } from 'react';

class ShoppingCart extends Component {
    render() {
        return (
            <li> {this.props.products} </li>
        );
    }
}

export default ShoppingCart;