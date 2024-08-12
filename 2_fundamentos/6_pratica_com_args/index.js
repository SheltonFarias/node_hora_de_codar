// externo
const minimist = require("minimist");

// interno
const soma = require("./soma").soma; // estou puxando a funcao de soma.js e executando a abaixo

soma(2, 2);

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"]); // transforma em numero inteiro
const b = parseInt(args["b"]);

soma(a, b);
