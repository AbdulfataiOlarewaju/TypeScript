"use strict";
// when to use interface and when to use type
const boxDemo = {
    width: 234,
    height: 5678
}; // no error here because of merging
// type Bag = {
//     size:number;
// }
// type Bag = {
//     color:string;
// } // error here because we cant merge types. cant reopen a type or cant redeclare type alia name
