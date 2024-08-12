import fs from "fs";

console.log("inicio");

fs.writeFileSync("arquivo.txt", "oi"); // cria um arquivo txt

console.log("fim");
