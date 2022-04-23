# **PAOO**
_Arquivos da aula: Programação Avançada Orientada a Objetos_

### **Ações e comandos de configuração Inicial:**

- Instalar o [node](https://nodejs.org/en/);
- Atualizar o npm:
   ```Shell Script
    $ npm update [-g] [<pkg>...]
    ```
- Instalar o typescript:
   ```Shell Script
    $ npm install -g typescript
    ```
- Para realizar o processo de *"transpilation"* em **TypeScript**, fazemos:
    ```Shell Script
    $ tsc <nomeDoArquivo.ts>
    ```
- Para rodar:
    ```Shell Script
    $ node <nomeDoArquivoTranspilado.js>
    ```
- Para configurar automaticamente:
    ```Shell Script
    $ tsc --int  
    ```
    > Ele cria um arquivo de configuração de projeto: _**tsconfig.json**_
---
- _**tsconfig.json**_:
    - **"rootDir"**: pega os arquivos de entrada, os **.ts**; nesse projeto usamos "./src" como rootDir, mas poderia ser qualquer nome.

    - **"outDir"**: pega os arquivos de saída, os arquivos "transpilados" (os **.js**); nesse projeto usamos "./dist" como outDir, mas poderia ser qualquer nome.
---
### **Para automatizar as transpilações:**
```Shell Script
$ tsc -w  
```
> _**typescript (tsc) watch mode (-w)**_: "observa" o arquivo que fornece as opções de compilação; "Transpila" automaticamente os arquivos .ts que estão em **"rootDir"**.
---

## Aula 03 - 05/03/2022

- arquivo: _util.ts_

**Exemplo:**

    for(const x of xs)

*const* = constante

*let* = "varável"

*in* = mostra o indicie

*of* = mostra o valor

>Obs.: caso seja declarado um valor que não exista em um vetor ele informa _**undefined**_

>Obs.: NaN = Not a Number

Type Union = |

**Exemplo:**

``` TypeScript
function max(xs: number[]): number | undefined{ 
    ...
    ...
    ...
}
```
---
### **Em Java:**

**isinstaceof**: verifica a cadeia de herança para cima, todos da sua cadeia retorna _true_ e fora da sua cadeia retorna _false_

---

### **Exercicio 1:**

* arquivo: exe_1.ts

Escreva uma função que recebe xs: string[] e uma função key que: (s:string) => number e devolve undefined, se xs é vazio, ou, em caso contrário, devolve uma string s de xs cuja chave kay(s) é máxima. 

---

### Arrow Function / lambda

* arquivo: lbd.ts 


    ((x:number) => x*x)(5)
    RESULTADO: 25

---

## Aula 04 - 19/03/2022

- arquivos:
    - _aula19ex1.ts_
    - _aula19ex2.ts_
    - _aula19ex3.ts_
    - _ex4.ts_


# [COPIAR ANOTAÇÕES DA GALERIA DEPOIS]

---

## Aula 05 - 02/04/2022

Uma função x que recebe uma função y como parâmetro, esta função x é uma função de alta ordem.