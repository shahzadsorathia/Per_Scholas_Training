// Grab the user input from our first name
// assing it to a variable


// console.log(firstName)
// console.log(lastName)


var sayHello=() => {

var firstName = document.querySelector("#firstname").value;
var lastName= document.querySelector("#lastname").value;

alert("Hello " + firstName + " " + lastName)

}

var setInfo=() => {

var userName = document.querySelector("#username").value;
var password = document.querySelector("#password").value;

if(userName.length < 8){
    alert("username must be 8 characters")
}


alert("UserName and Password have been set")
}
