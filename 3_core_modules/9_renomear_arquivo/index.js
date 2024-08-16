/*
Renomeando um arquivo

- Para renomear um arquivo com o fs utilizamos o método rename
- Precisamos passar o arquivo como parâmetro
- E também o novo nome!
- Neste método também podemos verificar algum eventual erro, pelo callback
- que pode ser ativado quando algum alvo não existe;
*/

import fs from "fs";

const arqAntigo = "arquivo.txt";

const arqNovo = "novoarquivo.txt";

fs.rename(arqAntigo, arqNovo, (err) => {
  /* rename recebe 3 argumentos o arquivo , novo nome do arquivo  e a funcao de erro*/
  if (err) {
    console.log(err);
  }

  console.log("arquivo renoameado!");
});
