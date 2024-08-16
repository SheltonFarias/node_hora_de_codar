/*
Detalhes de arquivos

- Podemos saber mais sobre os arquivos que temos acesso;
- Utilizamos o método stat de fs;
- Com ele temos informações de: tamanho, data de criação, se é arquivo ou diretório e etc
*/

import fs from "fs";

fs.stat("novoarquivo.txt", (err, stat) => {
  // vai checar oque e o arquivo informado
  if (err) {
    console.log(err);
    return;
  }

  console.log(stat.isFile()); // checa se é arquivo
  console.log(stat.isDirectory()); // checa se é diretorio
  console.log(stat.isSymbolicLink());
  console.log(stat.ctime); // dia da criacao
  console.log(stat.size); // tamanho
});
