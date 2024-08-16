/*
Removendo arquivos

- Para remover um arquivo com o fs utilizando o método unlink
- Precisamos passar o arquivo como parâmetro
- Temos a possibilidade de checar se houve algum erro, a partir da callback retornada;
*/

import fs from "fs";

fs.unlink("arquivo.txt", (err) => {
  /*recebe dois argumentos o arquivo que vai ser excluido e uma funcao com o parametro erro para ser retornado no console.log*/
  if (err) {
    console.log(err);
    return;
  }

  console.log("Arquivo removido!");
});
