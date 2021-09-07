import React, { useState } from "react";

//ES6 - function expression

const App = () => {
  // List of changes
  // no render()
  // we didn't import component
  // this has function and our class component uses the word class

  // In class components, we have access to the state object that comes with the component.
  // functional components are STATELESS whereas class components are STATEFUL
  // React developers got together and realized that you don't need class components for everything
  // Some components don't need state and this is one of the main reasons why the transition happened
  // Navs or Footer, or if the data is not changing, site logo

  // Documentation: https://reactjs.org/docs/hooks-reference.html#usestate
  // The way we create state in functional components:
  // you can name your state anything you want
  // GOAL : creare counter using useState hook
  // first arugument will be the name of our state
  // second argument will be the function that is LINKED to this specific state
  // inside useState we pass on an initial value
  // const [state, setState] = useState(initialState);

  const [count, setCount] = useState(0)

  // state = {
  //   count: 0
  // }

  // setCount is analagous to:
  // this.setState({ count: })
  return (
    <div className="App">
      <h1>Intro to React Functional Components</h1>
      <div>
        {/* In class components, we used to use "this" to access our state varibale. 
        Now Functional components lets us treat our component like a regular function. 
        "this" point to the parent object. We are no longer working with an object 
        component we are now using a function component */}

        {count}
      </div>
      {/* we no longer need to use this.setState, useState method let's 
      us nvoke the function we created in our state */}

      <button onClick={() => setCount(count + 1)}> Add</button>
      <button onClick={() => setCount(count - 1)}> Subtract</button>
    </div>
  );
}


// function declaration
// function app(){ }
export default App;