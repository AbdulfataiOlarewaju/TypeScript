"use strict";
// partial -> makes all the top level fields optional
const patch10 = { name: 'olarewaju' };
const patch11 = {
    address: {
        line1: 'line2',
        city: 'ilorin'
    }
};
const userAllPatch11 = {
    id: 'u2',
    name: 'sagam',
    address: { line1: 'line', city: 'ci' },
    email: 'email'
};
const readonlyUser = {
    id: 'us3',
    name: 'name',
    address: { line1: 'line', city: 'ci' },
};
const publicUser = { id: 'uS', name: 'name' };
const OmitUserN10 = {
    id: 'u4',
    name: 'name4',
    address: { line1: 'line', city: 'ci' },
};
// we can do whenever it is admin, i want to have so so so properties
const dirN10 = {
    admin: { id: 'us10', name: 'admin', address: { line1: 'line', city: 'ci' }, },
    user: { id: 'us10', name: 'user', address: { line1: 'line', city: 'ci' }, email: 'user@gamil.com' },
    editor: { id: 'us10', name: 'editor', address: { line1: 'line', city: 'ci' }, },
};
