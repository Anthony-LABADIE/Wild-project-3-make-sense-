const database = require("../../config");

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM firstdecision")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query(
      "SELECT firstdecision.content, user.lastname, user.firstname FROM firstdecision INNER JOIN user ON user.id = firstdecision.id_user WHERE firstdecision.id_decision = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO firstdecision SET ?", [payload])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM firstdecision WHERE id = ?", [id])
    .then(([res]) => res);
};

const updateOne = (firstdecisionData, id) => {
  return database
    .promise()
    .query("UPDATE firstdecision SET ? Where id = ?", [firstdecisionData, id])
    .then(([res]) => res);
};

module.exports = { findAll, findOne, createOne, deleteOne, updateOne };
