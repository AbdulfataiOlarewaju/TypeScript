"use strict";
// union means you are having a value, it can be either this or that
// value -> this or that 
// primitve union
function printId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id.toFixed(2);
    }
}
function describeUser(user) {
    if (user.role === 'Admin') {
        console.log(user.permissions);
    }
    else {
        console.log(user.loyaltyPoints);
    }
}
function describeUserWithInOperator(user) {
    if ('permissions' in user) {
        console.log(user.role, 'Ádmin');
    }
    else {
        // console.log(user.role, 'Customer' );
        console.log(user.loyaltyPoints);
    }
}
// array of unions and union of arrays
const arrOfUnion = ["a", 1, 2, 'b']; //it can be arranged any how because it is not a tupple okay
const unionOfArrays = Math.random() > 0.1 ? ["x", "y"] : [1, 2];
// unionOfArrays.push("z") you can't push bcause it does not know wheather it is a string or number
