// this file

let username : string  = "Abdulfatai"; 
let age : number = 25;
let isCreator : boolean = true; // ts infers this as boolean


const big : bigint = 2n ** 53n -1n; // ts infers this as bigint



// Operator '+' cannot be applied to types 'bigint' and 'number
// const mixed = big + age



const TOKEN : unique symbol = Symbol("token"); // ts infers this as symbol



function yearsToday(years : number) : number{
    return years * 365;
}

console.log(username.toUpperCase());

console.log(yearsToday(2));

