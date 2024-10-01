const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  /*banco, usurario, senha*/ "farias",
  "root",
  "tributario",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("conectado ao sequelize");
} catch (err) {
  console.log("nao foi possivel conectar ao DB", err);
}

module.exports = sequelize;
