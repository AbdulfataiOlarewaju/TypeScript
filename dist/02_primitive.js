"use strict";
// this file
let username = "Abdulfatai";
let age = 25;
let isCreator = true; // ts infers this as boolean
const big = 2n ** 53n - 1n; // ts infers this as bigint
// Operator '+' cannot be applied to types 'bigint' and 'number
// const mixed = big + age
const TOKEN = Symbol("token"); // ts infers this as symbol
function yearsToday(years) {
    return years * 365;
}
console.log(username.toUpperCase());
console.log(yearsToday(2));
