const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

// "npm init -y" cria uma package.json
// ver dependencias de bibliotecas prensentes no projeto no packege.json
// node index.js --nome=teste comando utilizado para puxar args
