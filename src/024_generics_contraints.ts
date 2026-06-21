//  <T> -> constraint  T so that only certain shapes are allowed 
// <T extends x> 
// key constranints -> <K extends keyof T> : meaning K must be a key of T                     // because if yuo guve any constant, T can be anything
// .length

// generics_constraint
function LenN4<T extends {length : number}>(xN4:  T) : number {
    return xN4.length
}

console.log(LenN4('Hello'));
console.log(LenN4([1, 2, 3, 4]));




// key constraint

type UserN6 = {id : string; name: string; age?: number}

function UserN6Extract<T, K extends keyof T>(arrN4:T[], keyN4: K) : Array<T[K]>{
    return arrN4.map(item => item[keyN4])
}

const userN6 : UserN6[] = [
    {
        id : '1',
        name : 'name1',
        age:20
    },
    {
        id:'2',
        name : 'name2'
    }
]

console.log(UserN6Extract(userN6, 'id'));
console.log(UserN6Extract(userN6, 'age'));// the samething 
// console.log(UserN6Extract(userN6, 'phone')); // wrong
