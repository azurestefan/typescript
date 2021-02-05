//Type annotations for functions
//Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

const add = (a: number, b: number): number => { // a argument, b argument( no inference in arguments) number output
    return a + b;
};

//arrow function
const subtract = (a:number, b:number): number => {
    return a-b;
};

//named function
function divide(a:number, b:number):number {
    return a/b;
};

//anonymous function
const multiply = function(a:number, b:number):number {
    return a*b;
};

//void
const logger = (message:string): void => {
    console.log(message);
}

//When we expect the function to never retrun anything ever.
const throwError = (message: string): void => {
    if(!message) {
        throw new Error(message);
    }
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

//destructured from forecast.date forecast.weather
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);


// You could leave the return to inference but this is not good.
// Because you can always make the mistake of not returning something or return an incorrect type.
// Typescript won't give you and error if you make this mistake so always use type annotations to get the error.

// Typescript cares about what the type of return it receives but does not care about 
// the code that gets there. Thus if the return satisfies number in the example above,
// typescript won't care if the a and b are subtracted/added etc etc.

//Type inference for functions.
//Typescript tries to figure out what type of value a funciton will return.
