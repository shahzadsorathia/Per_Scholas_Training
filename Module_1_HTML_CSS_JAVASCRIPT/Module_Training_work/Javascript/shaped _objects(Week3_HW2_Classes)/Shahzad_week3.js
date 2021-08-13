
class Circle {
    constructor (radius) {
        this.radius=radius;
    }
    circumference_sides() {
     console.log( Math.PI * this.radius * 2); }
    circle_area() {
      console.log( Math.PI * this.radius * this.radius);
    }
  }
  let circle = new Circle(20);
  console.log("Circumference of Circle: "); 
circle.circumference_sides();  
console.log("Area of Circle: ");      
circle.circle_area();    
console.log("-------------------")

class Rectangle  {
    constructor ( length, width) {
        this.length=length;
        this.width=width;
        
    }
    Rectangle_area() {
     console.log(this.length * this.width); }

     Rectangle_sides() {
       console.log( 4 % (this.length + this.width));
     }
  }
  let rectangle = new Rectangle(10,10);   
  console.log("Side of Rectangle: "); 
rectangle.Rectangle_sides(); 
console.log("Area of Rectangle: ");       
rectangle.Rectangle_area();    
console.log("-------------------")

class Square  {
    constructor (area) {
        this.area=area;
        
    }
    Square_area() {
     console.log(this.area * this.area); }

    Square_sides() {
     console.log (4 % this.area);
      }
  }
  let sqaure = new Square(10);
  console.log("Side of Square: "); 
    sqaure.Square_sides();  
    console.log("Area of Square: ");      
    sqaure.Square_area();  