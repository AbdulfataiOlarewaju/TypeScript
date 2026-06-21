

// inference example

const doubleFunc = (n:number)=> n * 2 //here you dont need to mention the return type

// explicit return for exported/public functions
export function totitle(s: string): string{
    return `hello ${s}`
}


function booleanToNumber(flag: boolean): number{
    if(flag){
        return 1;
    }else{
        return 0;
    }
}

//by deafult inference is used.

async function loadCOuntInfered(){
    return 42;
}

loadCOuntInfered().then(count => console.log(`count is ${count}`));
// loadCOuntInfered().then((n)=>console.log())