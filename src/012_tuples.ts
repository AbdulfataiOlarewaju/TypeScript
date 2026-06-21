//means that you have fixed length and fixd types and indexing matters

// normal we do (string | number)[] whose element can arranged any how but in tupple


const userEntry : [string, number] = ['Abdulfatai', 29]; // means first elemet must be a string and the second element must be number
//const userEntry : [string, number] = ['Abdulfatai', 29, 35]; //not work because i only mention two items ([string, number])
//so also as const userEntry : [string, number] = ['Abdulfatai']; //not work

type ResponseRow = [status:number, message?: string]

const r11 : ResponseRow = [100] // but ['100'] will work


const corner : readonly [number, number] = [100, 100]
// const corner : readonly [number, number] = [100] this will not work


