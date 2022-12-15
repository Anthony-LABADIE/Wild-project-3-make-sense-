const userModel = require("../models/user");

const userController = {
  getUsers: (req, res) => {
    userModel.findAll().then((users) => res.send(users));
  },
};

module.exports = userController;
