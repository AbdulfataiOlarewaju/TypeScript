"use strict";
// returnType<F> // tell what we are the things we are returing
// Paarameter<F> // tells what parameter we are recieving
// InstanceType<Ctor>
// ContructorParameters<C>
function ExtractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: 'sangam',
        log: isExtraInfo ? 'details' : undefined
    };
}
const argsInfo = ['u1', true];
const resultInfo = ExtractUserInfo(...argsInfo);
// console.log(resultInfo);
console.log(argsInfo);
class PersionN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, I am this -> ${this.name} and my age is ${this.age}`;
    }
}
const resultCtorInfo = ['Abdulfatai', 25];
const argsCtorInfo = new PersionN1(...resultCtorInfo);
// console.log(resultCtorInfo);
console.log(argsCtorInfo.greet());
