console.log( "----------------------");
console.log( "#1");
    sumOfNums = (add) => {
        var sum= 0;
        for(var i =0; i <add.length; i++){
        sum += add[i];
       };
       console.log(sum);
    }
    sumOfNums([1,2,3,4,5]) 
    sumOfNums([0,0,5]) 
    sumOfNums([-1,0,1])
    sumOfNums([])

console.log( "----------------------");
console.log( "#2");

 greaterNum = (array, numGreater) =>
{
        numGreater = 10;
        for(let i = 0; i < numGreater; i++)
        if (array[i] > numGreater)
            console.log(array[i]);
}
 
greaterNum([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]);

console.log( "----------------------");
console.log( "#3");

allGreaterThanTen = (array) =>
{
        
        for(let i = 0; i <= 10; i++) {
        if (array[i] > 10){
            console.log(array[i] , " TRUE") }
            else 
                console.log(array[i] , " False ")
            };
}
 
 allGreaterThanTen([11, 20, 100]) ;
 allGreaterThanTen([9, 100, 299]);
 allGreaterThanTen([1, 2]);
 allGreaterThanTen([10]) ;
 allGreaterThanTen([]);

console.log( "----------------------");

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
// (case-insensitive), `false` otherwise
// Test Cases:
// Expect anyStartingWithB(['Amy', 'Bob']) to equal true
// Expect anyStartingWithB(['apple', 'alligator', 'Arkansas'])) to equal false
// .split splits an array by the delimeter
const anyStartingWithB = function (words) {
    let testArray = words
    testArray.map((wordInTheArray)=>{
      let splitArray = wordInTheArray.split("")
      console.log(splitArray)
      if(splitArray[0]== "b" || splitArray[0]== "B"){
          console.log("True")
      }else{
          console.log("False")
      }
    })
  }
  anyStartingWithB(["bob", "james"])

  