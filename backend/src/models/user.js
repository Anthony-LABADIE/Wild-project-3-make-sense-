const database = require("../../config");

/* Model User pour chaque donnée de la table User */

/* Modes pour récupérer les USERS */

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM user")
    .then(([res]) => res);
};

const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO users SET ?", [payload])
    .then(([res]) => res);
};

module.exports = { findAll, createOne };
