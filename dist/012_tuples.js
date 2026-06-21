"use strict";
//means that you have fixed length and fixd types and indexing matters
// normal we do (string | number)[] whose element can arranged any how but in tupple
const userEntry = ['Abdulfatai', 29]; // means first elemet must be a string and the second element must be number
const r11 = [100]; // but ['100'] will work
const corner = [100, 100];
// const corner : readonly [number, number] = [100] this will not work
