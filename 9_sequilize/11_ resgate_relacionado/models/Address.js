const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Address = db.define("Adrdress", {
  street: {
    type: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  number: {
    type: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  city: {
    type: {
      type: DataTypes.STRING,
      required: true,
    },
  },
});

User.hasMany(Address);

Address.belongsTo(User);

module.exports = Address;
