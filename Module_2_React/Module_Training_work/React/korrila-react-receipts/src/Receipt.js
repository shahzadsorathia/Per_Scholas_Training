import React, { Component } from 'react';

class Receipt extends Component {
    render() {
      
        return (
            <div>
                <div>
               <h1>Name: {this.props.receipt.person} </h1> 
               <h3>Main: {this.props.receipt.order.main}</h3>
               <h3>Protein: {this.props.receipt.order.protein}</h3>
               <h3>Rice: {this.props.receipt.order.rice}</h3>
               <h3>Sauce: {this.props.receipt.order.sauce}</h3>
               <h3>Drink: {this.props.receipt.order.drink}</h3>
               <h3>Cost: {this.props.receipt.order.cost}</h3>
               </div>

             
            </div>
        );
    }
}

export default Receipt;