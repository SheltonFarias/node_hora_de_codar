/*
Trabalhando com diretórios

- Com o módulo fs também podemos trabalhar com diretórios(pastas)
- O método exists pode evidenciar se um diretorio existe ou não
- E o método mkdir pode criar um diretório
*/

import fs from "fs";

// Meu Exemplo
if (fs.existsSync("./minhapasta")) {
  // checo se existe uma pasta com esse nome
  console.log('Existe')
} else {
  console.log("Não existe");
  fs.mkdirSync('minhapasta')
}


// exemplo curso 
if(!fs.existsSync('./minhapasta')) { // checo se existe uma pasta com esse nome
  console.log('Não existe')
}

fs.mkdirSync('minhapasta')

if(fs.existsSync('./minhapasta')) {
  console.log('Existe!')
}
