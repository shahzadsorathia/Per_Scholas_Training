//  While Loop will run as long as our condition is true

// var a=1;
// while ( a<10 )
// {
// console.log(a);
// a ++;
// }

// var counter = 0;
// while( counter<35 ){
// console.log(counter);
// counter +=3;
// }

// var counter =1 ;

// while(counter <=20){

//     if( counter%2 == 0){
//         console.log(counter *=3);
//     }
//     counter ++;
// }


//var changeGiven= amountPaid - cookieCost;

// Nando went to the store to get a cookie, 
// the cookie cost 4 dollars and he paid with a 10 dollar bill. 
// Write a loop that shows how many quarters he received in change

// Variables for the cookie
// variab;es for the amount he paid
// variable for the change

var cookieCost = 4;
var amountPaid = 10;
var changeGiven= amountPaid - cookieCost;

console.log( " Change Left $"+ changeGiven )

while (  changeGiven <= amountPaid ){

    changeGiven /= .25;
   
    console.log(" Change in quarters " + changeGiven );

changeGiven ++;

 
}
