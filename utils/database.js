// sequelize v6 import
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("basic_node", "root", "zattwine", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
