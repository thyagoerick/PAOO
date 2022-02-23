
                                     //Natureza do valor devolvido, pode ser omitido
function sumNumber(a: number, b: number): number{
    return a + b;
}
/*
function sum(a: number, b: number){
    return a + b;
}
*/
console.log("Soma (Number): " + sumNumber(55, 5));

/*****************************************************************/

function sumBigint(a: bigint, b: bigint): bigint{
    return a + b;
}
//Para informar que o valor é bigint colocamos "n"  no final do valor (JS)
console.log("\nSoma (Bigint): " + sumBigint(10n,20n)); 

/*****************************************************************/

function fat(n: bigint) {
    let f = 1n;
    for(let i=2n; i <=n ; ++i)
        f *=i; 
    return f;
}
console.log("\nFatorial: " + fat(5n));

/*****************************************************************/

// Operador Ternário:  condição ? casoTrue : casoFalse
function rfat(n: bigint): bigint {
    return n == 0n 
            ? 1n 
            : n * rfat(n-1n);
}
console.log("\nFatorial Recursivo: " + rfat(3n)); 


