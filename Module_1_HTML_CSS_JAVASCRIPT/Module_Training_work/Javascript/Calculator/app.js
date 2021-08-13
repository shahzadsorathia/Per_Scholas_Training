

var addition=() => {
    var numone = parseInt(document.querySelector("#numone").value)
    var numtwo = parseInt(document.querySelector("#numtwo").value)
    var sum = numone + numtwo;
    document.querySelector("#display").value=sum
    }

var subtraction=() => {
    var numone = parseInt(document.querySelector("#numone").value)
    var numtwo = parseInt(document.querySelector("#numtwo").value)
    var sub = numone - numtwo;
    document.querySelector("#display").value=sub
    }

var multiplication=() => {
    var numone = parseInt(document.querySelector("#numone").value)
    var numtwo = parseInt(document.querySelector("#numtwo").value)
    var mul = numone * numtwo;
    document.querySelector("#display").value=mul
    }

var division=() => {
    var numone = parseInt(document.querySelector("#numone").value)
    var numtwo = parseInt(document.querySelector("#numtwo").value)
    var div = numone / numtwo;
    document.querySelector("#display").value=div
    }

var Average=() => {
        var numone = parseInt(document.querySelector("#num1").value)
        var numtwo = parseInt(document.querySelector("#num2").value)
        var numthree = parseInt(document.querySelector("#numthree").value)
        var numfour = parseInt(document.querySelector("#numfour").value)
        var numfive = parseInt(document.querySelector("#numfive").value)
        var avg = parseFloat(numone + numtwo + numthree + numfour + numfive) / 5;
               document.querySelector("#avgdisplay").value=avg
        }