"use strict";
function primeiro(par) {
    return par[0];
}
function segundo(par) {
    return par[1];
}
function cria_par(a, b) {
    return [a, b];
}
const par = cria_par(10, 'maria');
console.log(segundo(par));
const outro = cria_par('maria', 10);
console.log(segundo(outro));
