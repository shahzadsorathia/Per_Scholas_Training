// classes are used to create multiple objects.
// Keep code DRY

class Person {
    constructor(nameParameter, ageParameter, genderParameter){
        this.name =  nameParameter;
        this.age = ageParameter;
        this.gender= genderParameter; 
       
}
 Greet(){
    console.log("Hello my name is " + this.name) 
} 
}
var Taj = new Person("Taj", 27, "Male") 

console.log(Taj);


class Animal {
    constructor(speciesparam, bloodtypeparam, dietparam, colorparam){
        this.speciesparam =speciesparam;
        this.bloodtypeparam=bloodtypeparam;
        this.dietparam=dietparam;
        this.colorparam=colorparam;
    }
}

var Lizard =  new Animal("Bearded Dragon", "Cold-Blooded", "Omnivore", "Sandy-Color")
console.log(Lizard);

var Me= new Person("Tory", "31", "Male")
console.log(Me);
Me.Greet();