
                                   
/*
                                     //Natureza do valor devolvido, pode ser omitido
function sum(a: number, b: number): number{
    return a + b;
}

function sum(a: number, b: number){
    return a + b;
}
*/


function sum(a: bigint, b: bigint): bigint{
    return a + b;
}
//Para informar que o valor é bigint colocamos "n"  no final do valor (JS)
console.log(sum(10n,20n));