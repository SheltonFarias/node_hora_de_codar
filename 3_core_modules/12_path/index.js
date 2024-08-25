/*
  Módulo path

  - Com o path conseguimos extrair diversas informações sobre caminhos e arquivos;
  - Este também é um Code Module;
  - Algumas infos possíveis são; nome do diretório, nome do arquivo. extensão do arquivo e etc;
  */

import path from "path";

const custom = "/relatorios/matheus/relatorio1.pdf";

console.log(path.dirname(custom));
console.log(path.basename(custom));
console.log(path.extname(custom));
