const database = require("../../config");

/* Model User pour chaque donnée de la table User */

/* Modes pour récupérer les USERS */

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM user")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM user WHERE id =?", [Number(id)])
    .then(([res]) => res);
};

const findByEmail = (email) => {
  return database
    .promise()
    .query("SELECT * FROM user WHERE email =?", [email])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO user SET ?", [payload])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM users WHERE id = ?", [id])
    .then(([res]) => res);
};

module.exports = { findAll, findOne, createOne, findByEmail, deleteOne };
