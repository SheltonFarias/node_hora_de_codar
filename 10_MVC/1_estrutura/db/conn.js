const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("conectamos ao Mysql");
} catch (error) {
  console.log(`não foi possivel conectar: ${error}`);
}

exports.default = sequelize;
