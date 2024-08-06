// const path = require("path"); // puxa arquivo nativo do node (path)
import path from "path"; // puxa arquivo nativo do node (path)
const extension = path.extname("arquivo.php"); // analisa qual a extensao do arquivo

console.log(extension);
/* Quando e usado type: "modules" no package.json require nao pode ser usado */
