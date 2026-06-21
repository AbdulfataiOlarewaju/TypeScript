"use strict";
// means value must be everything from A and B
// const e: Entry = {id:'e1'} // error because there is no createdAt.
const e = { id: 'e1', createdAt: new Date() };
const User = {
    userName: "user",
    email: "user@gmail.com",
    password: "pass"
};
console.log(User);
// type NumberStringMix = NumberHolderUnique & NumberStringMix
// const bad : NumberStringMix = {a:123}
