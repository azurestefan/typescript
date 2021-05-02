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

new ArrayOfAnything<string>(['a','b','c']);
