const authorizationModel = require("../models/authorization");

const authorizationController = {
  getAuthorizations: (req, res) => {
    authorizationModel
      .findAll()
      .then((authorizations) => res.send(authorizations));
  },
  getOneAuthorization: (req, res) => {
    const { id } = req.params;
    authorizationModel
      .findOne(id)
      .then((authorization) => {
        if (authorization[0]) {
          res.send(authorization[0]);
        } else {
          res.status(404).send("USER NOT FOUND");
        }
      })
      .catch((err) => res.send(err));
  },
  postAuthorizations: (req, res) => {
    authorizationModel.createOne(req.body).then((authorization) => {
      if (authorization.affectedRows !== 0) {
        authorizationModel
          .findOne(authorization.insertId)
          // eslint-disable-next-line no-shadow
          .then(([authorization]) => res.send(authorization));
      } else {
        res.send("RIEN EST CREE");
      }
    });
  },
  deleteAuthorization: (req, res) => {
    const { id } = req.params;
    authorizationModel
      .deleteOne(id)
      .then((authorization) => {
        if (authorization[0]) {
          res.status(404).send("USER NOT DELETED");
        } else {
          res.send("DELETION COMPLETED");
        }
      })
      .catch((err) => res.send(err));
  },
  updateAuthorization: (req, res) => {
    const { id } = req.params;
    authorizationModel
      .putOne(req.body, id)
      .then((authorization) => {
        if (authorization.affectedRows === 0) {
          res.status(404).send("Not Found");
        } else {
          res.send(authorization);
        }
      })
      .catch((err) => res.send(err));
  },
};

module.exports = authorizationController;
