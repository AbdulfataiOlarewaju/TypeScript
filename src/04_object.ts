

//eamil? : string -> means email may be absent or absent, if it's present, it will be string
// It is not the same as email : string | undefined 

// type is use for object modeling to shape object and it is also also used fpr array
type User = { 
    id: number; //required
    name : string;//required
    email? : string; /// optional(could be present or not) because of ?
    readonly createdAt : Date; // can not be reassigned
}

const user1 : User = {
    id:1,
    name :"Abdulfatai",
    // email:"email@gmail.com", //optional, so you will not get any error if you remove this line
    createdAt:new Date()
}

const user2 : User = {
    id:2,
    name :"Olarewaju",
    email:"email@gmail.com", //optional, so you will not get any error if you remove this line
    createdAt: new Date()
}


// if you try to reassing createdAt, you will get error because it is a read-only property
// user1.createdAt = new Date()
// user1.id = 3 works ✅

type user2 = {eamil? : string}
type user3 = {eamil :string | undefined}




type Count = {[k: string]:number} //index signature -> key is a string but the value is a number
type Count1 = Record<"like" | "views" | "shares", number>


const c1 : Count = {whatever : 1}
const c2 : Count1 = {like : 1, views:2, shares:3}

console.log(c1)
console.log(c2);
;
