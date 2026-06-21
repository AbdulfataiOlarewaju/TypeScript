"use strict";
// Exclude<U, V> -> remove from U those members that are assignable to V
// Extract<U, V> -> keep from U those members that are assignable to V
// Nonnulllable
function handleEvent1(e) {
    console.log(e);
}
handleEvent1('click'); // no error
function handleEvent2(e) {
    console.log(e);
}
handleEvent2('create');
function sqaure(num) {
    return num * 2;
}
sqaure(10);
// sqaure(null) //error 
