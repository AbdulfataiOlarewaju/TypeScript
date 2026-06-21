// what is typeSript?
// TypeScript is a programming language built on javaSript that adds type checking to help developers catch error ealy and write reliable ccode

// goal of this file-> undesrtand when to let Typescript infer types
// ts -> knows js very well
// you need to know when   ts will writes the types / u are to write



// this type inference becuase  you dont have to mention it types :->
let count = 0; // ts sees this as number. 
const site = "acedevhub"; // ts sees this as string
const scors = [100, 200, 300]; // ts sees this as number[]

// over annonatation isn't bad but it is unnecessary just noisy

// you should anotate when we have a specific functionand we are going to return 

export function add(a: number, b: number) : number {
    return a + b;
}

console.log(add(5, 2));

// you should also annotate when the type is not obvious

let maybe : string | number;

maybe = Math.random() > 0.5 ? "hello" : 100;