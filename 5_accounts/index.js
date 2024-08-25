// Módulos externos
import inquirer from "inquirer";
import chalk from "chalk";

// Módulos internos
import fs from "fs";

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar saldo",
          "Depositar",
          "Sacar",
          "Sair",
          "excluir conta",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar conta") {
        createAccount();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Cosultar Saldo") {
        getaccountBalance()
      } else if (action === "Sacar") {
        withdraw()
      } else if (action === "Sair") {
        console.log(chalk.bgBlue.black);
      }
    })
    .catch((err) => console.log(err));
}

operation();

// Criar uma conta
function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));
  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para sua conta",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Esta conta já existe, escolha outro nome!")
        );
        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        }
      );

      console.log(chalk.green("Parabéns, a sua conta foi criada!"));
      operation();
    })
    .catch((err) => console.log(err));
}

// add an amount to user account
function deposit() {
  inquirer
    .prompt([
      {
        name: "account",
        message: "qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer["account"];

      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto voce deseja depositar",
          },
        ])
        .then((answer) => {
          const amount = answer['amount']

          operation()
          addAmount(accountName, amount)
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("Esta conta não existe, escolha outro nome!")
    );
    return false;
  }

  return true;
}


function addAmount(accountName, amount) {

  const accountData = getaccount(accountName)

  if(!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
    return deposit()
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

  fs.writeFileSync(
    `account/${accountName}.json`,
    JSON.stringify(accountData),
    function(err) {
      console.log(err)
    }
  )

  console.log(chalk.green(`foi depositado o valor de R$${amount} na sua conta`))
  operation()
}

function getaccount(accountName) {
  const accountJSON = fs.readFileSync(`account/${accountName}.json`, {
    ecoding: 'utf8',
    flag: 'r'
  })
  
  return JSON.parse(accountJSON)

}

function getaccountBalance() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'qual o nome da sua conta?'
    }
  ]).then((answer) => {

    const accountName = answer['accountName']

    if(!checkAccount(accountName)) {
      return getaccountBalance()
    }

    const accountData = getaccount(accountName)

    console.log(chalk.bgBlue.black(
      `Olá, o saldo da sua conta é de R$${accountData.balance}`
    ))
    operation()
  }).catch((err) => console.log(err))
}


function withdraw() {

  inquirer.prompt([
    {
      name:'accountName',
      message: 'Qual o nome da sua conta'
    }
  ]).then((answer) => {
    const accountName = answer['accountName']

    if(!checkAccount(accountName)) {
      return withdraw()
    }

    inquirer.prompt([
      {
        name: 'amount',
        message: 'Quanto voce deseja sacar?'
      }
    ]).then((answer) => {
      const amount = answer['amount']

      removeAmount(accountName,amount)
      
    }).catch((err) => console.log(err))

  }).catch((err) => console.log(err))

}

function removeAmount(accountName, amount) {

  const accountData = getaccount(accountName)

  if(!amount) {
    console.log(chalk.bgRed.black('ocorreu um erro, tente novamente mais tarde'))
    return withdraw()
  }

  if(accountData.balance < amount) {
    console.log(chalk.bgRed.black('Valor indesponivel!'))
    return withdraw()
  }

  accountData.balance = parseFloat(accountData.balance)
}