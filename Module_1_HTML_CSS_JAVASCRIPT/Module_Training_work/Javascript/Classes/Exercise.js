class Dog{
    constructor(name,color,breed ){
        this.name=name;
        this.age= "Six Months";
        this.color=color;
        this.breed=breed
    }
    running(){
        console.log(this.name + " Is runiing")
    }

    eating(){
        console.log(this.name + " Is eating")
    }

    barking(){
        console.log(this.name+" Is barking")
    }
}

var Spot = new Dog("Spot", "Brown","Lab" )
Spot.age="2 Years";
console.log(Spot);

var Miles = new Dog( "Miles", "Brown", "Flemish Giant")
console.log(Miles);
Miles.eating();