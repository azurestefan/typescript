const carMakers = ['ford', 'toyota', 'chevy' ];
// type annotation necessary for initialized empty array.
const showMakers: string[] = [];

const dates = [new Date(), new Date()];
    
//2d array
const carsByMake = [
    ['f150']
    ['corolla']
    ['camaro']
];

const carByMake: string[][] = []; 
//annotation used when there is an empty array

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// error    carMakers.push(100);

//We can get help with 'map' 'forEach' 'reduce' functions
carMakers.map((car:string): string => {
    return car.toUpperCase();
});

//Flexible-arrays can still contain multiple different types
// can be treated as date or string
const importantDates:(Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());


//Any time we need to represent a collection of records with some arbitrary sort order

// Tuples are very similar to arrays but have something different
// Tuples are array-like structure where each element represents some property of a record

//object
const drinka = {
    color: 'brown',
    carbonated: true,
    sugar: 40
  };
  //labels int he object like color, carbonated, sugar is replaced by putting in 
  // property values in a very specific order. 
  
  // Type alias. Definition referred to by annotation in the tuples below.
  type Drink = [string, boolean, number];
  //tuple. Ordering is critical. Don't swap the order. The annotation below turns the simple array into a tuple.
  const pepsi: Drink = ['brown', true, 40];
  const sprite: Drink = ['clear', true, 40];
  const tea: Drink = ['brown', false, 0];
  

   //You won't use tuples that much. 
  const carSpecs: [number, number] = [400, 3354];
  
  //instead of tuple, key value pair object is used. Now you know what data is being represented.
  const carStats = {
    horsepower: 400,
    weight: 3354
  };