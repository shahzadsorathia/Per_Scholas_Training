import products from './data';
import React, { Component } from 'react'
console.table(products)

/// We are goint to react our class component
// the shortcut for the class component boilerplate using react code snippets in rcc

export default class App extends Component {
  // we need to initialize our state before render method
 // Props is data or properties being passed down from component

 //* ======= OLD SYNTAX ======
// constructor(props){
 // super() refers to the parent componet (superclass)
//   super(props)
//   this.state = {
//     products: products
//   }
// }

// * === NEW SYNTAX =====
// ! HIGHLY RECOMMEND

state={
  products:products
}
  render() {
 console.log(this.state.products)
    return (
      <div>
       <h1>Big Time Shopping </h1>
       <ul>
         {/*map over products list that we imported */}
         {
           products.map((item) =>{
             return(
               <li> {item.name}</li>
              )
            })
          }
       </ul>
      </div>
    )
  }
}