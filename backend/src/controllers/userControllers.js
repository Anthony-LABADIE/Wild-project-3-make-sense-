const { validationResult } = require("express-validator");
const argon2 = require("argon2");
const userModel = require("../models/user");

const userController = {
  getUsers: (req, res, next) => {
    userModel
      .findAll()
      .then((users) => res.send(users))
      .catch((err) => next(err));
  },

  getOneUSer: (req, res, next) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then((user) => {
        if (user[0]) {
          res.send(user[0]);
        } else {
          res.status(404).send("User not found");
        }
      })
      .catch((err) => next(err));
  },

  // eslint-disable-next-line consistent-return
  createUser: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hashingOptions = {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 5,
      parallelism: 1,
    };

    // eslint-disable-next-line camelcase
    const { firstname, lastname, email, is_admin, password } = req.body;

    const hashedPassword = await argon2.hash(password, hashingOptions);

    userModel
      .createOne({
        firstname,
        lastname,
        email,
        // eslint-disable-next-line camelcase
        is_admin,
        password: hashedPassword,
      })
      .then((response) => {
        if (response.affectedRows !== 0) {
          userModel.findOne(response.insertId).then((result) =>
            res.status(201).send({
              message: "user created",
              id: result.insertId,
              email,
              firstname,
              lastname,
            })
          );
        } else {
          res.send("USER NOT CREATED");
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = userController;
