import React, { Component } from 'react';
import './App.css'

/*
=========================================
                NOTES
=========================================

**** OBJECTIVES ****
1.) Asynchronous vs Synchronous
2.) API, JSON
3.) HTTP protocol, SOAP VS REST, HTTP verbs
3.) AJAX - Fetch API - will need discussion of Promises
4.) Use third-party API, render data on our browser

*/

/* ===== SYNCHRONOUS VS ASYNCHRONOUS =====

Synchronous: Runs code line per line. waits for 
task to finish before moving on.

Asynchronous: Moves to another task before the previous one finishes.
usually anything hat will depend on time can be async

*/

// EXAMPLE OF SYNCHRONOUS
// console.log("Synchronus")
// console.log("Hi")
// console.log("Bye")
// EXAMPLE OF ASYNCHRONOUS - setTimeout, Promises, FETCH

// First argument is a function, second argument is the time lapse before the code runs
// setTimeout(() =>{
//   console.log("Asynchronous")
// },3000)
// console.log("HI")
// console.log("BYE")

// // ===== API =====
/*

Application Programming Interface: collection fo clearly defined methods of communication between different software components. Allows us to retrieve data from a system aka (database) and use it in our application.

TLDR: APIs acts as a messenger to send HTTP requests to a server and gives us a response.

YouTube: https://youtu.be/s7wmiS2mSXY

*/

// EXAMPLES OF APIs - DOM, Fetch, Third-party APIs

// ===== JSON =====
/*

 Above, we talked about API returning to us a response. 
 One of the most common ways for APIs to store, structure and 
 transfer data is through JSON.

 JSON: JavaScript Object Notation. Just like a object,
 it has key/value pairs which can take in different data types.

 Format of an object:
 {
   "name": "Teo",
   "age": "forever 23"
 }

 format of typical JavaScript Objects:
 {
   name: "Teo"
 }
*/

// ===== HTTP PROTOCOL =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 9 

 HTTP Protocol: used to delver data (HTML Files, Images, Etc) on the internet

 TLDR: Transmission Control Protocol and Internet Protocol - protocols that work together
 to make sure data has a destination and get's there safely.

 For more details:
 TCP/IP: https://www.fortinet.com/resources/cyberglossary/tcp-ip
*/

// ===== SOAP VS REST =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 8

 Go to slide 7: show example of XML document, heavier on resource

 For the sake of this course, we will be focusing on REST using JSON data.

 SOAP: Simple Object Access Protocol - you send a whole XML file.
 REST: Representional State Transfer - you send a representational data as JSON object.

*/

// ===== URI =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 11

 URI: Unifrom Resource Identifier

 Purpose: Locate resources/access web pages on the server hosting the web services

 Format:
 <protocol>://<service-name>/<ResourceType>/<ResourceID>

 Examples: 
 • https://www.bestbuy.com/site/electronics/customer-service/
 • https://try.alexa.com/alexa-tutorials/
 
*/

// ===== RESTFUL ROUTES - HTTP VERBS - CRUD =====
/*

 Above, we see how we are accessing resources/web pages. RESTful routes allows us to use HTTP verbs with the CRUD actions.

 RESTful route:

 Picture example: will be posted in slack. Important to understand.

 ======================================
              IMPORTANT
 ======================================
 CRUD cycle: Vreat, Read, Update, and Delete. 
 Most of the things that we do lnline uses these basic operations of 
 PERSISTENT storage. FOREVER!!
 Remember everything that we are seeing online is data that is probably saved in a database.

 Examples of things we can CRUD: files, personal information on a website,
 instagram photos, gaming profiles.

 Examples of things we can CRUD: 

 HTTP verbs: Five verbs that include GET, POST, PUT, and DELETE. the one will be working on in this course will be 
 GET, PUT, POST, DELETE.

 CRUD | HTTP VERB ties in with HTTP request.
 ----------------
 Create - POST
 Read - GET
 Update - PUT/PATCH
 Delete - DELETE

 EXAMPLES: Mod-1 -> Week 4 -> Day 2 -> slide: 11-16

 ***** We will be only focusing on GET HTTP requests for Mod 2 *****
*/

// ===== AJAX, PROMISES, FETCH, ASYNC/AWAIT =====

// AJAX: stands for Asynchronous JavaScript and XML - which allows us to update parts of a web page without reloading
// AJAX calls: allows us to do HTTP requests with a server / database without the need for a refresh

// Fetch: allows us to do AJAX calls which returns a Promise 

// ===== PROMISE =====
/*

 Promises has three states:
 
 Pending: initial state, neither fulfilled or rejected 
 fulfilled: successfull
 rejected: something went wrong

*/

// Quick video example of a Promise: https://www.youtube.com/watch?v=RvYYCGs45L4

// Watch in your own time to understand under the hood promises: https://www.youtube.com/watch?v=s6SH72uAn3Q

// Since we don't know when promises will return to us a response, it has built in methods such as .then() that does more things once we get a response

// Show example of under the hood:
const promiseToDoSomething = new Promise((resolve, rejected) => {
  // there will be code here that returns a response
  let something = true
  if (something === true) {
    resolve("Success")
  } else {
    rejected("Failed")
  }
})

promiseToDoSomething
  .then()
  .then()
  .catch()

// For the sake of us using Fetch, it will just return a Promise object to us that we can use

class App extends Component {

  // GetData = () => {
  //   //console.log("We are inside GetData")
  //   //fetch - first argument takes in the URL
  //   //Remeber Fetch returns a PRMISE
  //   // HTTP GET REQUEST

  //   fetch('https://jsonplaceholder.typicode.com/todos/1') // retruns a PROMISE
  //     // After we get a PROMISE from fetch() we run the code below
  //     // The way .then() works its it takes a callback .. a function within a function
  //     // The Object response that we got is not readbale for us yet 
  //     // The way we TRANSLATE our response to javascript is to use the method JSON()

  //     .then(Response => Response.json())
  //     //after we use json() we can THEN usa .then() to do the next task
  //     .then(data => console.log(data))
  

  // THIRD PARTY API - Google Twitter ... companies provides APIS which allows us access to their data.
  //A lot of FREE APIs and some require API key

  // ======= API KEY =======
  // to open API door -> accessing their data
  // API keys are tere for there for companies to keep track of how you use their data.
  // so you dont abuse it.

  //====== GOALS =======
  // 1.) Get an API key from OMDB
  // 2.) Write a fetch call to get a Movie based on what we typed.
  // 3.) In our app we will have an input field where we can type a movie title and render that movie 
  // in our application.

  // STATE - new syntax -  HIGHLY RECOMMENDED
  // What our URL query should look like https://www.omdbapi.com/?apikey=bb39feaa&t=toystory
  //==== BASIC URL QUIERIES ====
  // The ? start our query parameters
  // The & is used as a comma when using multiple parameters

  state = {
    movieTitle: ' ',
    baseUrl: "http://www.omdbapi.com/?",
    apiKey: "apikey=bb39feaa",
    query: "&t=",
    // searchURL is a combination of baseURL, apiKey, query, and movieTitle
    searchURL: " ",
    movieData: {}
  }

  handleChange = (event) => {
    console.log("Searching for this title: ", event.target.value)

    this.setState({
      movieTitle: event.target.value
    })
  }

  handleSubmit = (event) =>{
    // default behavior - web pages refreshes when we do a submit
    // must do in form when handling submit

    event.preventDefault()
    console.log("We are inside handleSubmit.")
    console.log(
        this.state.baseUrl 
      + this.state.apiKey 
      + this.state.query 
      + this.state.movieTitle
    )
//this.setState CAN actually take in TWO arguments
// frist argument is an object with us updating our state
    this.setState({
      searchURL: 
        this.state.baseUrl 
      + this.state.apiKey 
      + this.state.query 
      + this.state.movieTitle
    })
  }

  render() {
    return (
      <div >
        <div id="header" >APIs and Everything in Between</div>
        {/* <button onClick={this.GetData}> Fetch </button> */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:  </label>
          <input
            type="text"
            id="title"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;