import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual sua linguagem preferida? ", (language) => {
  if (language === "python" || language === "html" || language === "css") {
    console.log("isso nem e linguagem");
  } else {
    console.log(`A minha linguaguem preferida é: ${language}`);
  }
  rl.close();
});
