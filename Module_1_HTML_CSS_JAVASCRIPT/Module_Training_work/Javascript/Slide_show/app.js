var imagebank= [ "images/img1.jpg","images/img2.jpg", "images/img3.jpg","images/img4.jpg","images/img5.jpg" ]
// Variable to hold the length of entire array

var arraylength = imagebank.length-1;
// varibale to act as a counter in our araay

var counter =0;

var slide =(x) =>{

    // variable to increase the index in the array
    counter += x;

    // variable to grab the element with the id of slideshow in our html
var slideshow = document.querySelector("#slideshow");

// src the sideshow image to be whatever index in the array that the counter is at
slideshow.src = imagebank[counter];


}


