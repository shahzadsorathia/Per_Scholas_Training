
const generatesquares = () =>{
// for loop for 1 - 1000
    for (let counter =1; counter <=1000; counter++) {
    // create a new html element 
    let square= $('<div>').addClass('square')
    
    // also needs to have class of square
    // append it to the body 
    $('body').append(square)
    }
}

//generatesquares();