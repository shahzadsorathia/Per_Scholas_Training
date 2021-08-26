const message = "Hello World"

//Vanilla javascript
// document.addEventListener('DOMContentLoaded',() => {
//     const div =document.querySelector('.container')
//     div.innerHTML = '<h1>'+ message + '</h1>'
// })

//React
// Since we imported ReactDOM in our index.html we can 
//then use the ReactDOM in our file

// Render is a method in ReactDOM thats let's us see our app on the browser
// two arguments
ReactDOM.render(
    //JSX - mixture of JS and HTML
    // in JS the way we tell it to read JS is by the {}
    <h1> {message} </h1>,
    // second argument
    document.querySelector('.container')
)