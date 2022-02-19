/*
                                     //Natureza do valor devolvido, pode ser omitido
function sum(a: number, b: number): number{
    return a + b;
}

function sum(a: number, b: number){
    return a + b;
}
*/
/*
function sum(a: bigint, b: bigint): bigint{
    return a + b;
}
//Para informar que o valor é bigint colocamos "n"  no final do valor (JS)
//console.log(sum(10n,20n));

function fat(n: bigint) {
    let f = 1n;
    for(let i=2n; i <=n ; ++i)
        f *=i; 
    return f;
}
console.log(fat(50n));
*/

function rfat(n: bigint): bigint {
    return n == 0n 
            ? 1n 
            : n * rfat(n-1n);
}

console.log(rfat(3n)); 


