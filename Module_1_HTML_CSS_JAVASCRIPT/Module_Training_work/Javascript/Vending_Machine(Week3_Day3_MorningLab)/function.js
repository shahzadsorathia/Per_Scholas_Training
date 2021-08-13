// create a class/template for a new vending machine
// we are able to give it a name and a type
class Machine  {
    constructor(name,type){
        this.name=name,
        this.type=type,
        this.snacks=[
                {
               name:"Apple",
                price: 1.00,
            },
            {
                name:"Orange",
                price: 1.00,
            },
             {
                name:"Pear",
                price: 1.25,
            }
        ]
    }
    vend(snackNumber){
        console.log("You selected " + this.snacks[snackNumber].name + " " +
         " The price is " + this.snacks[snackNumber].price)
    }
}
// creating a new vending machine based off of the template or
// class that we created by using the keyword new
var vendingMachine = new Machine("Feed-Me-Fast","Healthy")
var snackMachine = new Machine("Snack-Machine","Non-healthy")
console.log(snackMachine)
snackMachine.vend(2)