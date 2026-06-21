"use strict";
// try to always mention the return type 
function func1(a, b) {
    return a + b;
}
const nums12 = [1, 2, 3];
const double = nums12.map(n => n * 2); // infered as (n:number)
// always prefer to give annotation
// const times2 = (n) => n*2 // wrong 
const times2 = (n) => n * 2; //right
function distanceFromOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distanceFromOrigin({ x: 3, y: 2 }));
