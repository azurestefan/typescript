//Classes in Typescript
// Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'
//Typescript has modifiers that are not in ES2015 JS. 
// public - a method can be called any where, any time
// private - can only be called by other methods in this class
// protected - this method can be called by other methods in this class, or by other methods in child classes



//Parent Class Vehicle
class Vehicle {
    //fields- properties that are going to reference values.
    // name  of property - color. 
    // We want to traditionally initialize a variable with a value anytime we declare it in a class.
    // Constuctor- Special function that is, when defined in a class, instantly executed right when we create
    // a new instance of a class ( below new Vehicle()). Argument orange is passed.
    constructor(public color: string) {}
    //public can be used not only on methods of a class, but on properties and fields as well.

    //protected is called below by a child class's method.
    protected honk(): void {
      console.log('beep');
    }
  }
  
  //instance of a class. (new Vehicle)
  const vehicle = new Vehicle('orange'); //color orange passed in as argument, but need a constructor for parent class.
  console.log(vehicle.color);
  
  //basic inheritance. Child class Car.
  class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
      super(color);
    }
    
    //private modifier. Only called by the method in this class.
    //Used whenever we want to restrict access to a method/function.
    //Not used because of security. Used when function can deeply affect/break stuff when called by others.
    private drive(): void {
      console.log('vroom');
    }
  
    startDrivingProcess(): void {
      this.drive();
      this.honk();
    }
  }
  
  //instance of a car
  const car = new Car(4, 'red');
  car.startDrivingProcess();