console.log("Working");

//window.alert("This is an Error");

// prompt("What is your anme? " );

// for( var counter=0; counter<100; counter++){
//     prompt("Why did you leave your computer");
// }

// document.write("Hello from the Dom");

// we will use document.querySelector to grab HTML elements
// assign html elements to avariable 

var messageBox = document.querySelector("#message");

console.log(messageBox);

var showMessage =() => {
    messageBox.innerHTML = " I am doing great! Thanks for asking."
}
 

var mountain = document.querySelector("#mountain");
// function to change the picture

var changepic=() =>{
mountain.src="images/img2.jpg"
}

var changepic2=() =>{
    mountain.src="images/img1.jpg"
    }