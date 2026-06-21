// means value must be everything from A and B


type Inter1 = {id: string};
type Inter2 = {createdAt : Date}


type Entry = Inter1 & Inter2 //means must have both id and createdAt

// const e: Entry = {id:'e1'} // error because there is no createdAt.
const e : Entry = {id:'e1', createdAt :new Date()}


// homework
// solution

type Username = {userName: string};
type Email = {email: string};
type Password = {password: String};

type UserInfo = Username & Email & Password;

const User : UserInfo = {
    userName:"user",
    email:"user@gmail.com",
    password:"pass"
}

console.log(User);


type NumberHolderUnique = {a:number}
type StringHolderUnique = {a:string}

// type NumberStringMix = NumberHolderUnique & NumberStringMix

// const bad : NumberStringMix = {a:123}






