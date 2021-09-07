import React, { Component } from 'react';
import Child from './Child'

/*
  ==============================
       COMPONENTS LIFECYCLE
  ==============================

  ===== OBJECTIVES =====
  1.) The life cycle of components
  2.) how to use and when to use

  Documentation: https://reactjs.org/docs/react-component.html

  ===== What is a component's lifecycle? =====
    • Components have three life stages:
      1.) Mounting - created (after the component loads when JSX is rendered)
      2.) Updating - grows (adding more things to our component)
      3.) Unmounting - dies

  ===== Why should we care about the lifecycle? =====
    • It allows us to do things in our components during it's life stages.
    • Components come with methods we can use that is tied in during these stages.

  ===== Lifecycle Methods =====
    • In this lesson, we will only learn three life cycle methods. 
    • The other methods you may see online are deprecated or are rarely used.

    Methods:
    1.) componentWillMount()
    2.) componentDidMount()
    3.) componentWillReceiveProps()
    4.) shouldComponentUpdate()
    5.) componentWillUpdate()
    6.) componnentDidUpdate()
    7.) componentWillUnmount()

    • These methods are in the order of typically what would happen during a component's life cycle.
    • The methods below are taken out because they were causing errors and were being misused. They are still accessible but with the prefix "UNSAFE_"
    
    Deprecated Methods:
    1.) componentWillMount()
    2.) componentWillReceiveProps()
    3.) componentWillUpdate()
  
    ===== Three methods we will learn today =====
    1.) componentDidMount()
    2.) componentDidUpdate()
    3.) componentWillUnmount()

    • You will predominantly just be using componentDidMount() in most cases.
*/

class App extends Component {
  state = {
    total: 0,
    childIsMounted: true
  }
  // componentDidMount() - mount = rendered 
  // invoked immediately after a component is mounted. If you need to load data from a remote endpoint, this is  good place to instantiate the network request. (AJAX calls)
  // You want to try and put your componentDidMount() just right after your state object/constructor for organizational purposes. 

  componentDidMount() {
    console.log("Component did mount")
  }

  componentDidUpdate() {
    // this is where you would do THINGS after updating your component such as updating our state
    console.log("Component did update")
  }

  // add function
  add = () => {
    this.setState({
      total: this.state.total + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Component Lifecycle</h1>
        <div>
          <p>{this.state.total}</p>
          <button onClick={this.add}>Add</button>
        </div>
        <div>
          {
            this.state.childIsMounted ? <Child /> : null
          }
        </div>
        <button onClick={() => this.setState({ childIsMounted: false })}>Remove Child</button>
      </div>
    );
  }
}

export default App;

