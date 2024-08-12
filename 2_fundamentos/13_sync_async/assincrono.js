import fs from "fs";

console.log("inicio");

fs.writeFile("arquivo2.txt", "oi", function (err) {
  setTimeout(() => {
    console.log("arquivo criado!");
  }, 2000);
});

console.log("fim");
