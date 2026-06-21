

// Promise<T>
// nested Promise<Promise<T>
// Thenables -> .then method


// Awaited<T>


type Promise1 = Awaited<Promise<number>> // meaning this will return a number
type Promise2 = Awaited<Promise<Promise<string>>>
type Awaited1 = Awaited<String> // this only a string not a promise


type PromiseUnionExample = Awaited<Promise<string | number>>
 


