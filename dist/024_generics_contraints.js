"use strict";
//  <T> -> constraint  T so that only certain shapes are allowed 
// <T extends x> 
// key constranints -> <K extends keyof T> : meaning K must be a key of T                     // because if yuo guve any constant, T can be anything
// .length
// generics_constraint
function LenN4(xN4) {
    return xN4.length;
}
console.log(LenN4('Hello'));
console.log(LenN4([1, 2, 3, 4]));
function UserN6Extract(arrN4, keyN4) {
    return arrN4.map(item => item[keyN4]);
}
const userN6 = [
    {
        id: '1',
        name: 'name1',
        age: 20
    },
    {
        id: '2',
        name: 'name2'
    }
];
console.log(UserN6Extract(userN6, 'id'));
console.log(UserN6Extract(userN6, 'age')); // the samething 
// console.log(UserN6Extract(userN6, 'phone')); // wrong
