"use strict";
const couters = {};
couters['Like'] = 1;
couters['Comments'] = 3;
couters['Shares'] = 5;
const metrics = {
    Like: 1,
    views: 4,
    comments: 6,
    shares: 50
};
// when you have something called dynamic keys at run time, so in that case you use  map instead of record
const priceMap = new Map();
priceMap.set('likes', 1);
const lm = {};
lm['like'] = 1;
lm['view'] = undefined;
