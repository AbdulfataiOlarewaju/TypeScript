"use strict";
const xss = [1, 2, 3, 4];
const ys = [1, 2, 3]; //readonly method
const yss = [1, 2, 3]; //generic form
xss[0] = 9;
xss.push(19); //work because it a mutable array
// ys.push(2) //give error because it is a read only array
// when to use it ->
function sum(nums) {
    let s = 0;
    for (const n of nums)
        s += n;
    return s;
}
console.log(sum(xss)); //passing mutable array in readonly params is allowed
const result = yss.map(n => n * 8);
