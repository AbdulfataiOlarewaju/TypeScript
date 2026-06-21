"use strict";
function greetPersonOptional(name) {
    const upperRes = name ? name?.toUpperCase() : 'Guest';
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional('abdulfatai'));
console.log(greetPersonOptional());
function greetPersonDefault(name = 'Default') {
    return `Hello ${name.toUpperCase()}`;
}
console.log(greetPersonDefault('olarewaju'));
console.log(greetPersonDefault());
function connect(host, port, secure) {
    const P = port ?? 80; // means if availabel else pick 80 by default
    const s = secure ?? false;
    return `Connect ${host} ${port} ${secure}`;
}
connect('localhost');
connect('localhost', 100, true);
// console.log('localhost'); //works
// console.log('localhost', 100, true)
