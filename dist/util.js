"use strict";
// recebe xs: number[] tal que xs.legth > 0
// e devolve um elemento máximo de xs
/*
function maxV0(xs: number[]): number{
    let cand = xs[0];
    for(const x of xs){
        if(x>cand){
            cand = x;
        }
    }
    return cand;
}
*/
function max(xs) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs) {
        if (x > cand) {
            cand = x;
        }
    }
    return cand;
}
//key é uma função que recebe um number e devolve um number
function maxBy(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs) {
        if (key(x) > key(cand))
            cand = x;
    }
    return cand;
}
const r = max([2, 3, 1, 8, 3, 5]);
if (r != undefined)
    console.log(r + 2);
console.log(max([2, 3, 1, 8, 3, 5]));
//console.log(max([]));
