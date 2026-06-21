

// understand what is "type parameter" <T>
// how ts infers <T> from  your argument automatically


// generics is function where the types are blanks and we can fill it later
//  <T> is a placeholder for type, which will be filled in when you call this function
// ts will try to understand what T should be based on the arguments passed into the function



function id<T>(x:T) : T {
    return x;
}

// infers T meaning if i try to call id(5), it understands that T is number or if call id('hello') then T is string
// there is no need of passing like <number>(5)  



const xyzz = id(5);
console.log(xyzz + 1);
console.log(id(['abdulfatai']));



function fisrtGen<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(fisrtGen([4,6,7]));

// without generic -> {x : nkkwown} => unkonwn
// with generics : <x : T> // keep  the exact type
function wrap<T>(value : T) : {value : T}{
    return {value}

}