const sq = (x: number) => x*x;


/*function maxByV0(xs: number[], key: (x: number) => number): number | undefined {
    if (xs.length == 0) return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (key(x) > key(cand)) cand = x;
    return cand;
}*/

const maximo = (xs: number[]) => {
    if (xs.length == 0) return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (x > cand) cand = x;
    return cand;
}

function maximo2(x: number, y: number) {
    return x >= y ? x : y;
}



console.log(maximo([1, 3, 4, 5]));
console.log(maximo2(10, 20));
console.log(sq(5));
console.log(((x: number) => x*x)(5));