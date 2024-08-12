import chalk from "chalk";

const nota = 5;

if (nota >= 7) {
  console.log(chalk.green("parabéns! voce foi aprovado"));
} else {
  console.log(chalk.bgRed.blueBright("infelizmente voce foi reprovado"));
}
