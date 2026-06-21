

// returnType<F> // tell what we are the things we are returing
// Paarameter<F> // tells what parameter we are recieving
// InstanceType<Ctor>
// ContructorParameters<C>


function ExtractUserInfo(id :string, isExtraInfo = false){
    return {
        id,
        name : 'sangam',
        log : isExtraInfo? 'details' : (undefined as string | undefined)
    }
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>


const argsInfo : GetUserParamsInfo =  ['u1', true]
const resultInfo : GetUserReturnInfo = ExtractUserInfo(...argsInfo)


// console.log(resultInfo);
console.log(argsInfo);



class PersionN1 {
    constructor(public name:string, public age : number){}

    greet(){
        return `Hi, I am this -> ${this.name} and my age is ${this.age}`
    }
}

type PersionInstanceN1 = InstanceType<typeof PersionN1>
type persionCtorArgsN1 = ConstructorParameters<typeof PersionN1>


const  resultCtorInfo : persionCtorArgsN1 = ['Abdulfatai', 25]
const  argsCtorInfo: PersionInstanceN1 = new PersionN1(...resultCtorInfo)


// console.log(resultCtorInfo);

console.log(argsCtorInfo.greet());
