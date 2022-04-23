type Par<A, B> = [A,B];

function primeiro<A, B>(par: Par<A, B>): A{
    return par[0];
}

function segundo<A, B>(par: Par<A,B>): B{
    return par[1];
}

function cria_par<A, B>(a: A, b: B): Par<A,B>{
    return [a, b];
}

//const par: Par<number, string>
const par = cria_par(10, 'maria');
console.log(segundo(par))
const outro = cria_par('Maria', 10);
console.log(segundo(outro));