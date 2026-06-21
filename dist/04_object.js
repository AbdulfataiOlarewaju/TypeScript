"use strict";
//eamil? : string -> means email may be absent or absent, if it's present, it will be string
// It is not the same as email : string | undefined 
const user1 = {
    id: 1,
    name: "Abdulfatai",
    // email:"email@gmail.com", //optional, so you will not get any error if you remove this line
    createdAt: new Date()
};
const user2 = {
    id: 2,
    name: "Olarewaju",
    email: "email@gmail.com", //optional, so you will not get any error if you remove this line
    createdAt: new Date()
};
const c1 = { whatever: 1 };
const c2 = { like: 1, views: 2, shares: 3 };
