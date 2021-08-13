
const generatesquares = (quantity) =>{
// for loop for 1 - 1000
    for (let counter =1; counter <=( quantity); counter++) {
    // create a new html element 
    let square= $('<div>').addClass('square')
    
    // Grenrate a random value for each rgb value 
    square.css('background-color', genereratecolors())

    // add the number of each square
    square.text(counter);

    // also needs to have class of .square
    // append it to the body 
    $('body').append(square)
    }

}
var genereratecolors= () => {
    var red = Math.floor(Math.random()* 255);
    var green = Math.floor(Math.random()* 255)
    var blue = Math.floor(Math.random()* 255)

    return " rgb(" + red + "," + green + "," + blue + ")"
}

//genereratecolors ();

//generatesquares();