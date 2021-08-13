/* 
1. Define a functionÂ maxOfTwoNumbersÂ that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

console.log("1. Max Of Two Numbers: ");
maxOfTwoNumbers = (first_num, second_num ) => {
    if(first_num > second_num){
        console.log( first_num + " Is Larger than " + second_num);
    }
    else{
        console.log(first_num + " Is smaller than " + second_num)
    }

  };

maxOfTwoNumbers( 100, 20);
console.log("--------------------");
  
  /*
  2. Define a functionÂ maxOfThreeÂ that takes three numbers as arguments and returns the largest of them.
  */
  console.log("2. Max Of Three Numbers: ");
maxOfThree = (first_num, second_num, third_num ) => {
   
    if(first_num > second_num ){
    if( first_num > third_num)
        { console.log("Largest Number is First: " + first_num)}
    }
        if(second_num > first_num ){
        if( second_num > third_num)
            { console.log("Largest Number is Second: " + second_num)}
        }
            if(third_num > first_num ){
            if( third_num > second_num)
                { console.log("Largest Number is Third: " + third_num)}
            }
    
    else {
        console.log("try again");
    }
}
maxOfThree( 2, 111, 10) ;
console.log("--------------------");

  

 //3. Write a functionÂ isCharacterAVowelÂ that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
   
console.log("3. Is character a VOWEL: ");
   isCharacterAVowel = (char) => {
   var vowels = ['a','i','e','o','u', 'A','I','E','O','U' ] ;
    console.log(vowels.includes(char)); 
}
isCharacterAVowel('A');
console.log("--------------------");
 
//   4. Define a functionÂ sumArrayÂ and a functionÂ multiplyArrayÂ that sums and multiplies (respectively) all the numbers in an array of numbers. For example,Â sumArray([1,2,3,4])Â should return 10, andÂ multiplyArray([1,2,3,4])Â should return 24.
console.log("4. SumArray");
   sumArray = (add) => {
    var sum= 0;
    for(var i =0; i <add.length; i++){
    sum += add[i];
   };
   console.log(sum);
}
    sumArray( [1,2,3,4]);

    console.log("4. SumMultiply");

    sumMuliply = (add) => {
     var sum= 1;
     for(var i =0; i <add.length; i++){
     sum = (sum * add[i]);
    };
    console.log(sum);
 }
     sumMuliply( [1,2,3,4]);
   
   console.log("--------------------");
//   5.Write a function that returns the number of arguments passed to the function when called.
//console.log("5. Number of Arguments");

//   6. Define a functionÂ reverseStringÂ that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//   */

 console.log("--------------------");
  console.log("6. Reverse String: ")
    reverseString = (char) => {
    var rev = '';
    for (var i = char.length - 1; i >= 0; i--) {
    rev += char[i];	
    }
    console.log(rev);
}
reverseString("jag testar");

//   7. Write a functionÂ findLongestWordÂ that takes an array of words and returns the length of the longest one.

console.log("--------------------");
console.log("7. Longest Word: ");
findLongestWord = (char) => {
var word = char.split(' ');
var maxlength = 0;
for( let i=0; i < word.length; i++){
    if ( word[i].length > maxlength){
        maxlength = word[i].length;     
    }
  }
  console.log( maxlength );
}
findLongestWord(" Per Scholas Class") ;


  
  