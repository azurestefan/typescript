//annotation is like a comment we give to typescript. It might not be invoked code but a description.
// even if you delete the annotation(description), typescript can perform "type inference" to guess the type.
// for example if you delete the : number annotation from let apples typescript can still infer what the type is.
// We can delete all the annotations on this file and it will still work.
// So why use type annotation?
// 1. when we declare a variable on one line then initialize it later
// 2. when we want a variable to have a type that can't be inferred
// 3. When a function returns the 'any' type and we need to clarify the value
// Type inference we will rely on all the time!

let apples: number = 5;
//let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
apples = 6;

//built in objects
let now: Date = new Date();

//Array(type annotaion for an array of strings)
let colors: string[] = ['red','green','blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,true,false];

//Classes
class Car {

}
let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

//Function
const logNumber: (i: number)=> void = (i: number) => {
    console.log(i);
};
// for a function you have to make a type annotation for 1. the arguments the function receives
// and 2. the values it returns. 
//the logNumber function will receive i as a number and return void(expect this function to return nothing)
// everything up to void is the annotation and everything on the right side of the equal= is the function.


//When to use annotations
//  1. when we declare a variable on one line then initialize it later
const json = '{"x":10, "y":20}';
//const coordinates = JSON.parse(json);
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);
//when you hover over parse you can see that it has the type any
// JSON.parse() will return any type. We can possibly get very different types.
// Typescrpt doesn't know what type of value we will get from JSON.parse(). 
// AVOID variables with 'any' at all costs!!
// fix this with type annotation!

// 2. when we want a variable to have a type that can't be inferred
let words = ['red','green','blue']
let foundWord: boolean;

for(let i = 0; i< words.length; i++){
    if (words[i] === 'green') {
        foundWord = true;
    }
}
//since I declared and initialized foundWord in different lines 
// let foundWord; is type any. so you must add the annotation boolean. 

//3. When a function returns the 'any' type and we need to clarify the value
let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i <numbers.length; i++){
    if(numbers[i]> 0){
        numberAboveZero = numbers[i];
        // type inference proceeded but didn't get the intention of our code.
        // added  boolean | number type annoation to make typescript understand that we can
        // assign either a type boolean or number to the numberAvoceZero variable.
    }
}

