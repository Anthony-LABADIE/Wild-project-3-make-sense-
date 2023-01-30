/* eslint-disable camelcase */
const firstdecisionModel = require("../models/firstDecision");

const firstdecisionController = {
  getAllFirstDecision: (_, res) => {
    firstdecisionModel
      .findAll()
      .then((firstdecision) => res.send(firstdecision))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  getOneFirstDecision: (req, res) => {
    const { id } = req.params;
    firstdecisionModel
      .findOne(id)
      .then((firstdecision) => {
        if (firstdecision.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(firstdecision[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  postFirstDecision: (req, res) => {
    const { id_decision, id_user, content } = req.body;
    firstdecisionModel
      .createOne({
        id_decision,
        id_user,
        content,
      })
      .then((result) =>
        res.status(201).send({
          id: result.insertId,
          content,
        })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  deleteFirstDecision: (req, res) => {
    const { id } = req.params;
    firstdecisionModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`firstdecision ${id} not found`);
        }
        return res.status(200).send(`firstdecision ${id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  updateDecision: (req, res) => {
    const { id } = req.params;
    const firstdecisionData = req.body;
    firstdecisionModel
      .updateOne(firstdecisionData, id)
      .then((firstdecision) => res.send(firstdecision))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};

module.exports = firstdecisionController;
