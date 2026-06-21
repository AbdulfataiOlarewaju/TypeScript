


function greetPersonOptional(name? : string): string{
    const upperRes = name ? name?.toUpperCase() : 'Guest';

    return `Hello ${upperRes}`
}

console.log(greetPersonOptional('abdulfatai'));
console.log(greetPersonOptional());

function greetPersonDefault(name : string = 'Default') : string {
    return `Hello ${name.toUpperCase()}`
}

console.log(greetPersonDefault('olarewaju'));
console.log(greetPersonDefault());



function connect(host: string, port? : number, secure? : boolean){
    const P = port?? 80 // means if availabel else pick 80 by default
    const s = secure?? false
    return `Connect ${host} ${port} ${secure}`
}

connect('localhost')
connect('localhost', 100, true)
// console.log('localhost'); //works
// console.log('localhost', 100, true)
