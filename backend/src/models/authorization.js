/* eslint-disable camelcase */
const database = require("../../config");

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM authorization")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM authorization WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};

const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO authorization SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE from authorization WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const putOne = (payload, id) => {
  return database
    .promise()
    .query("UPDATE authorization  SET ? WHERE id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

// const countNotifcation = (id_user) => {
//   return database
//     .promise()
//     .query(
//       "SELECT  count(authorization.notification) FROM authorization WHERE authorization.notification=1 and id_user = ?",
//       [id_user]
//     )
//     .then(([res]) => res);
// };

module.exports = {
  findAll,
  createOne,
  findOne,
  deleteOne,
  putOne,
  // countNotifcation,
};
