


const a11 : number[] = [1,2,3]; // T[]
const a22 : Array<number> = [1,2,3]; //Array<T>


const scores = [95,87,64];

scores.push(10);
// scores.push('hello'); error

const mix = ['a', 'b', 1, 2]; // this also infer. typesript undestand this as  const mix (number | string)[] = ['a', 'b', 1, 2];