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
