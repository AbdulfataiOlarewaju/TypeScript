"use strict";
// StrictNullChecks
// let title : string = 'into'
// title = undefined //undefined cannot be assigned to string because of strict null checks
// to fix it, we make use of union
let subtitle = "Abdulfatai"; // = undefined
// void used when a function does not return a useful value
function log(msg) {
    console.log(msg);
}
// or you can use never 
function fail(msg) {
    throw new Error(msg);
} //this function will never return any value
// do not use any. when you have a type, try to use the types as possible so that if something breaks it is easy to fix.
const valueAny = JSON.parse('{"x" : 1}'); //this complies but can break any time of run. dont use whenever yuo dont sure wheather its an object or number etc.
valueAny.nothere.toFixed(2); //this will compile and work fine even because we are using any but it can break at runtime.
