//Interfaces: Creates a new type, describing the property names and value types of an object.
// A custom type that we can define.

//refactored to a more generic name. 
interface Reportable {
    summary(): string;
  }
  
  // fixed long annotation by creating an interface. 
  // definition
  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    }
  };
  

  //The entire point of interfaces. oldCivic and drink both have summary function that returns a string.
  // Both considered to be type reportable. We can both use these with the function we defeined below
  // printSummary() 
  // **We can use a single interface to describe the shape/ different properties of very different objects** 
  const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
      return `My drink has ${this.sugar} grams of sugar`;
    }
  };
  
  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };
  
  printSummary(oldCivic);
  printSummary(drink);

  //General strategy of Reusable Code in TS
  // Create functions that accept arguments that are typed with interfaces
  // Objects/classes can decide to 'implement' a given interface to work with a function
  // interface acts as a gatekeeper. Checks objects to restrict access to function.