"use strict";
function describeType(value) {
    if (typeof value === 'string') {
        return 'string';
    }
    if (Array.isArray(value)) {
        return 'array';
    }
    if (typeof value === 'number') {
        return 'number';
    }
    if (typeof value === 'boolean') {
        return 'boolean';
    }
    if (typeof value === 'symbol') {
        return 'symbol';
    }
    if (typeof value === 'undefined') {
        return 'undefined';
    }
    if (typeof value === 'object') {
        return typeof value;
    }
    if (typeof value === 'function') {
        return 'function';
    }
    if (value === null) {
        return 'null';
    }
    if (typeof value === 'object') {
        return typeof value;
    }
    if (typeof value === 'bigint') {
        return 'bigint';
    }
    if (value === null)
        return 'null';
}
console.log(describeType('hi'));
console.log(describeType([]));
console.log(describeType(23));
console.log(describeType(true));
console.log(describeType(Symbol('abdulfatai')));
console.log(describeType(undefined));
console.log(describeType(() => { }));
console.log(describeType(null));
console.log(describeType({}));
console.log(describeType(BigInt));
function info(X) {
    if (Array.isArray(X)) {
        return X;
    }
    if (X instanceof Date) {
        return new Date();
    }
    if (X instanceof Error) {
        return new Error("Error");
    }
}
console.log(
// info([1,2,3,4]),
// info(new Date()),
// info(new Error('error message')),
info({ name: 'abdul', age: 25 }));
