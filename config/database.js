const Sequelize = require("sequelize");
module.exports = new Sequelize("todolist", "todolist", "pass", {
    host: "localhost",
    dialect: "postgres"
});