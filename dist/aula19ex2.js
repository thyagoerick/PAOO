"use strict";
/*
type NaoVazia<A>= [A, Lista<A>];
type Lista<A> = NaoVazia<A> | undefined;

function cabeca<A>(lista: NaoVazia<A>): A { //função construtora
    return lista[0];
}

function cauda<A>(lista: NaoVazia<A>): Lista<A> { //função construtora
    return lista[1];
}

function eh_vazia<A>(lista: Lista<A>): Boolean {
    return lista == undefined;
}

function constroi<A>(cabeca: A, cauda: Lista<A>): NaoVazia<A> {
    return [cabeca, cauda];
}


//recebe inicio <= fim
//devolve uma lista com os numeros inicio, inicio+1, .....

function cria_lista(inicio: number, fim: number): Lista<number> {
    return inicio == fim
    ? undefined
    : constroi(inicio, cria_lista(inicio+1, fim));
}

function para_string<A>(lista: Lista<A>): string {
    return lista == undefined
            ?'undefined'
            :`[${cabeca(lista)}, ${para_string(cauda(lista))}]`
}

function map<A,B>(lista: Lista<A>, f: (a: A) =>B): Lista<B>{
        return lista == undefined
        ? undefined
        : constroi(f(cabeca(lista)), map(cauda(lista),f));
}

const strs = constroi('maria', constroi('joana', constroi('amanda',undefined)))
const comps = map(strs, s=>s.length);
console.log(comps);


const lista = cria_lista(2,6);
console.log(para_string(lista));
const nomes = constroi('maria', constroi('Joana', undefined));
console.log(para_string(nomes));

*/ 
