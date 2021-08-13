/* 1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers. 
Remove this imposter immediately and assign it to a new variable named `notHof` Console.log this new variable as well as the original list.*/
console.log("------------");
console.log("#1. ");
var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
var notHof = [] ;
notHof.push(hof[5]);
hof.pop();
console.log(hof);
console.log(notHof);

console.log("------------");
console.log("#2. ");

/*2. As head of McDonald's New Product Division, your job is to test and approve all new menu items. In the testMenu array below, 
all the items are approved except for "McLinguine" and "McChar-Siu Bau". Remove these items from the list and console.log the updated testMenu.*/

var testMenu = [
" McPizza Burger",
" McFly Burger",
" McLinguine",
" McChar-Siu Bau",
" McChop-Chae",
" McPancit"
];
testMenu.splice(2,2 )
console.log(testMenu);


/* Increase the peace! Your job is quash the bitter rivalry and unite both the westSide and eastSide rappers into a new array called `oneLove`. 
Console.log this new array.*/

console.log("------------");
console.log("#3. "); 

var westSide = ["Dre", "2Pac", "Snoop"  ];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

var oneLove = [ westSide  + eastSide];


console.log(oneLove);


/*Some drama between you and the Kardashian's went down during last Saturday's potluck party. 
You are no longer on speaking terms and need to unfriend the following from your facebook:
"Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`. 
Console.log this new variable.*/

console.log("------------");
console.log("#4. "); 

var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"
];

var unFriend= [];
unFriend.push(fbFriends[1], fbFriends[2], fbFriends[3]);
console.log(unFriend);


//create a user profile using map where following keys. 
console.log("------------");
console.log("#5. "); 
var user1 = new Map()
user1.set('first_name', 'Shahzad');
user1.set('last_name', 'Sorathia');
user1.set('company', 'Per-Scholas');
user1.set('department', 'Cohort: 2021-12-RTT');
console.log(user1);