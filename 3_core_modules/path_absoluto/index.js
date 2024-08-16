/*
Path absoluto e formar path

- Com a função resolve é possível saber qual o path completo até o arquivo alvo;
- E com a função join é possível formar um path dinâmico, com variáveis e valores fixos;
- São duas funções muito importantes;
*/

import path from "path";

// path absoluto
console.log(path.resolve("teste.txt"));

// formar path
const midfolder = "relatorios";
const filename = "teste1.txt";

const finalPath = path.join("/", "arquivos", midfolder, filename);

console.log(finalPath);
