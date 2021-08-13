// Loops are used to repeat code until condition is met

// For Loop
// 1. Declaring the Variable
// 2. Set the Condition to be tested 
// 3. Set the work that will be done if the condition is true
//  4. What to do if condition is false

// output zero to ten
// for(var counter = 0; counter <= 10; counter ++  ){
//   console.log(counter); 
//   }

// output ten to zero 
// for(var counter = 10; counter >= 0; counter --  ){
//     console.log(counter);
// }

// for ( var i = "#"; i.length <= 6; i += "#"){
   
//     console.log ( i );
// }


// for(var counter = 6; counter <= 60; counter +=3  ){
//         console.log(counter );
// }


// --------------------------------------------------------------------------

// console.log( "3, 5, 7, 9");
// for(counter =3; counter <=10; counter +=2) {
//         console.log(counter) 
// }

// console.log( " 2, 4, 6, 8, 10");
// for(counter =2; counter <=10; counter +=2) {
   
//         console.log(counter)
// }


console.log( " EVEN ODD PRIME ");
for(counter =0; counter <=20; counter ++) {



    if(counter %2==0) {
        console.log(counter + " Even")
}
    else {
        console.log(counter + " ODD"); 
    }
}


for (var i = 0; i <= 20; i++) {
    var flag = 0;

    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i + " PRIME");
    }
}