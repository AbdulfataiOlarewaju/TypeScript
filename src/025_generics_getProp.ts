

type UserN7 = {
    id : string;
    name : string;
    email?:string;
    phone?:number
}

function getUserPropN7<T, K extends keyof T>(objN6:T, keyN7:K) : T[K]{ //meanigni need the valus based on the key
    return objN6[keyN7]
}

// t[K] -> object of K(key)


const userN7 : UserN7 = {
    id: 'ui', name:'Abdulfatai' //-'john'
}

const idValN7 = getUserPropN7(userN7, 'id')

console.log(idValN7);

function setUserPropN7<T, K extends keyof T>(
    objN7 : T, keyN7 : K, newVal:T[K]
) : void {
    objN7[keyN7]= newVal
}

// function setUserPropN7<T, K extends keyof T>(
//     objN7 : T, keyN7 : K, newVal:T[K]
// ) : T[K] {
//     objN7[keyN7]= newVal
//     return objN7[keyN7]
// }

setUserPropN7(userN7, 'name', 'john')
setUserPropN7(userN7, 'phone',123)

const isNewUser = setUserPropN7(userN7, 'name', 'john')
console.log(isNewUser);
