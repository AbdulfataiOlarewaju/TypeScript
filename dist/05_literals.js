"use strict";
function move(d) {
    console.log(d);
}
const d1 = "left"; //TS keeps literals type "left" because it is const 
move(d1);
let d2 = "left"; // got error, TS widdens to string because we use let(i.e the value of d2 can be changed later) 
// move(d2)
//solution ->
let d3 = "left";
move(d3);
