//Generics
//Here are two similar classes with the only difference being the presence
// of a type of collection
//condense these classes down to one using generics

class ArrayOfNumbers {
    constructor(public collection: number[]){}

    get(index:number): number{
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string{
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {  //T or TypeInThisClass is just like an argument. 
    constructor(public collection: T[]) {}
    
    get(index: number): T {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything<string>(['a','b','c']);
//typescript figured out the type of array of anything for us through type inference.
//when we create a new instance of array of anything we pass in an array of strings.
//that array shows up as the variable or argument to the constructor of collection above
//typescript looks at the type of collection that we just passed in as an argument and realize that
//it is an array of strings. T must be string!
// axios is a generic class. When using axios we have a specific return type. We didn't have to annotate it because
// of type inference around generics. 

new ArrayOfAnything<string>(['a','b','c']);


// **generics with functions**
function printStrings(arr: string[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//Use generics to create one function that can receive any type of array
//treat <T> as an extra argument.
function printAnything<T>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printAnything<string>(['a','b','c']); //add type annotations like <string> as it will help you catch errors.
printAnything(['a','b','c']); //this still works because of type inference.


//**Generic Constraints**
//Use interface to guarantee that the type being used has a certain method.

class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for(let i = 0; i<arr.length; i++){
        //arr[i].print();   error as there is no guarantee that type T has print method available.
        //define an interface right abouve the function definition, and extend it with Type T.
        arr[i].print();
    }
}

printHousesOrCars([new House(), new House()]);
printHousesOrCars([new Car(), new Car()]);