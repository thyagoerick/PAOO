"use strict";
function maxByStr(xs, key) {
    let cand = xs[0];
    for (const x of xs) {
        if (key(x) > key(cand))
            cand = x;
    }
    return cand;
}
function grade(s) {
    switch (s) {
        case 'joao': return 10;
        case 'maria': return 8;
        case 'ana': return 7;
        default: return 3;
    }
}
function invGrade(x) {
    //invertendo o numero que está associado a ela
    return -grade(x);
}
//menor
console.log(maxByStr(['joao', 'maria', 'ana', 'antonio'], s => -grade(s)));
//maior
console.log(maxByStr(['joao', 'maria', 'ana', 'antonio'], grade));
