// Modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

// Modulos internos
import fs from "fs";
import { error } from "console";

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que voce deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then()
    .catch((err) => console.log(err));
}

operation();
