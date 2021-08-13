// OOP - Inheritance 

// Create a class called Fish 
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim? 

class Fish {
    constructor(color){
        this.color = color
    }
    
    //Method
    swim() {
        console.log("Ofcourse I can Swim, I'm a fish!")
    }
}

const ramsey = new Fish("green")

 // Inheritance
 //Subclass
 class Nemo extends Fish{
     constructor(color){
         super(color) //refer to the parent superclass
         this.speed="Slow"
     }

// takes in its parents atributes and methods

// polymorphism - when we instantiate a class we in its parent artributes and methods
// purpose - we can then add extra things to our class Nemo

//Override Methods
swim(){
    console.log("yeah i can swim, but I'm slow")
}
}

const teo = new Nemo("Orange")
console.log(teo.color)
console.log(teo.speed)
teo.swim();

