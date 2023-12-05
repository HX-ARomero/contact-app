const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const { ContactModel } = require("./models");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false}
);

ContactModel(sequelize);
// console.log(sequelize.models); //* { Contact: Contact }
// const { Contact } = sequelize.models;

module.exports = { sequelize, ...sequelize.models };