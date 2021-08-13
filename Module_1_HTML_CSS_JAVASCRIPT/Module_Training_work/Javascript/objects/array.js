const adventurer = {
    name: "Timothy",
    hitpoionts: 10,
    belongings: ["sword", "potion" , "Tums"],
    companion: {
        name: "Velma",
        type: "Bat"
    },
    companion2:{
        name: "Charlie",
        type: "Insect",
        belongings: ["scube tank", "joe rogan", "health insurance"]
    }

}

adventurer.companion.name = "Susan";

//console.log(adventurer.companion.name)
console.log(adventurer.companion2.belongings)


//console.log(adventurer.belongings[1]);


// add "Vogue" to the end of the belongings array

adventurer.belongings.push('Vogue');

// Iterate over the array in the object

// for( var counter = 0; counter < adventurer.belongings.length; counter ++){
//     console.log(adventurer.belongings[counter])
// }
