import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

//Browser router has HTML5 history API with methods to keep our application in 
//sync with the URL.
// Developers use "as" to declare an ALIAS for 
// BrowserRouter - why? because who wants to write out the whole thing?

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // React.strictmode is tere to look for potential errors.
  // We want to wrap our whole application inside router
  // so that it will render the components we want based on the URL
  <React.StrictMode>
    <Router>
      <App />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
