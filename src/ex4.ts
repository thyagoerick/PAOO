/*
const v = [1, 2, 3, 4, 5, 6];
const w = v.map(x => x*x); // comando map vai ler o array indicado e faz o processo da função determinada pra cada indice
console.log(w);
const ns = ['maria', 'ana', 'patricia', 'joana'];
const cs = ns.map(s => s.length); // comando length é uma função para contar o comprimento
console.log(cs); // console.log é comando para imprimir
console.log(ns);
*/

/*
const alunoNota: Array<[string, number]> = 
 [['ana', 10], ['maria', 8], ['jose', 9], 
 ['marcio', 4]];
console.log(alunoNota.filter(d => d[1] >= 5))
*/

//const nums = [1, 2, 3, 4, 5, 6, 7, 8];
/*
console.log(nums.map(x=> x+1).map(x=>x*x));
//Cuidado (maps): é gerada uma lista intermediária desnecessária
*/

//console.log(nums.reduce((acc,x) => acc + x , 0))
                                       // O 0 é o primeiro elemento da lista só pode um valor
/*
OBS.: avalia o array da esquerda para a direita (foldleft).
Logo, ficaria assim:
(((((((1 + 2) + 3) + 4) + 5) + 6) + 7) + 8)
reduce só aceita lista
reduce transforma o retorno em uma 
*/

/*
//function reduce<A, B>()
const ss = ['maria', 'joana', 'vanessa'];
console.log(ss.reduce((acc, ss) => acc + ss.length, 0));
*/
