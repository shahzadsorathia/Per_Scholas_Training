var hellobutton = document.querySelector("#Hello")
console.log(hellobutton)


// Using vanilla Javascript 
document.querySelector(".goodbye").innerHTML = "Goodbye"

//using Jquery
$(".goodbye").html ("See ya Later")

const sayHello = () =>{
    // Create h2 element 
    let h2 = $('<h2>').text("Hello")
    console.log(h2)

    // append hs element to the body
    $('body').append(h2)
}

sayHello()