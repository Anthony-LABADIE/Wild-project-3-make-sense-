const conflictModel = require("../models/conflictModel");

const conflictControllers = {
  getAllConflict: (_, res) => {
    conflictModel.findAll().then((conflict) => res.send(conflict));
  },
  postConflict: (req, res) => {
    // eslint-disable-next-line camelcase
    const { id_decision, id_user, content, date } = req.body;

    conflictModel
      // eslint-disable-next-line camelcase
      .createOne({ id_decision, id_user, content, date })
      .then((result) => {
        res
          .sendStatus(201)
          // eslint-disable-next-line camelcase
          .send({ id: result.insertId, id_decision, id_user, content, date });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving the conflict");
      });
  },
  getOneConflict: (req, res, next) => {
    const { id } = req.params;
    conflictModel
      .findOne(id)
      .then((user) => {
        if (user.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(user[0]);
        }
      })
      .catch((err) => next(err));
  },

  deleteConflict: (req, res) => {
    const { id } = req.params;
    conflictModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`user ${id} not found`);
        }
        return res.status(200).send(`user ${id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving the conflict");
      });
  },
  updateConflict: (req, res) => {
    const { id } = req.params;
    const conflictData = req.body;
    conflictModel
      .updateOne(conflictData, id)
      .then((conflict) => res.send(conflict))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving the conflict");
      });
  },
};

module.exports = conflictControllers;
