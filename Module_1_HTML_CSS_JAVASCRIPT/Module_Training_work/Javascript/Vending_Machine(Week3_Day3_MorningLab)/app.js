class Vending_Machine {
    constructor(name, Price,snackOneName){
        this.name=name;
        this.Price=Price;
        this.Snackarray=snackOneName //= [ this.snackOneName=snackOneName  ]
    }
}
 var Snack = [
  snackone = new Vending_Machine("Machine One","$2.89","Snickers"),
 //console.log(snackone);
  snacktwo = new Vending_Machine("Machine One","$1.89","KitKat"),
 //console.log(snacktwo);
  snackthree = new Vending_Machine("Machine One","$0.99","Twix")
// console.log(snackthree);
]

console.log(Snack[1]);