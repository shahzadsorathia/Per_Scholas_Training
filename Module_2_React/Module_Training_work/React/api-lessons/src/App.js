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
setTimeout(() =>{
  console.log("Asynchronous")
},3000)
console.log("HI")
console.log("BYE")

// ===== API =====
/*

Application Programming Interface: collection fo clearly defined methods of communication between different software components. Allows us to retrieve data from a system aka (database) and use it in our application.

TLDR: APIs - DOM, Fetc, Third-party APIs

YouTube: https://youtu.be/s7wmiS2mSXY

*/

// EXAMPLES OF APIs - DOM, Fetch, Third-party APIs

// ===== JSON =====
/*

 Above, we talked about API returning to us a response. One of the most common ways for APIs to store, structure and transfer data is through JSON.

 JSON: 

 Format of an object:
 {
   "name": "Teo",
   "age": "forever 23"
 }

*/

// ===== HTTP PROTOCOL =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 9 

 HTTP Protocol: 

 TLDR: 

 For more details:
 TCP/IP: https://www.fortinet.com/resources/cyberglossary/tcp-ip
*/

// ===== SOAP VS REST =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 8

 Go to slide 7: show example of XML document, heavier on resource

 For the sake of this course, we will be focusing on REST using JSON data.

 SOAP: 
 REST: 

*/

// ===== URI =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 11

 URI:

 Purpose:

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
 CRUD cycle:

 Examples of things we can CRUD: 

 HTTP verbs: 

 CRUD | HTTP VERB
 ----------------
 Create - POST
 Read - GET
 Update - PUT/PATCH
 Delete - DELETE

 EXAMPLES: Mod-1 -> Week 4 -> Day 2 -> slide: 11-16

 ***** We will be only focusing on GET HTTP requests for Mod 2 *****
*/

// ===== AJAX, PROMISES, FETCH, ASYNC/AWAIT =====

// AJAX: 
// AJAX calls: 

// Fetch: allows us to do AJAX calls which returns a Promise

// ===== PROMISE =====
/*

 Promises has three states:
 
 Pending: 
 fulfilled: 
 rejected: 

*/

// Quick video example of a Promise: https://www.youtube.com/watch?v=RvYYCGs45L4

// Watch in your own time to understand under the hood promises: https://www.youtube.com/watch?v=s6SH72uAn3Q

// Since we don't know when promises will return to us a response, it has built in methods such as .then() that does more things once we get a response

// Show example of under the hood:

// For the sake of us using Fetch, it will just return a Promise object to us that we can use

class App extends Component {
  render() {
    return (
      <div >
        <div id="header" >APIs and Everything in Between</div>
      </div>
    );
  }
}

export default App;