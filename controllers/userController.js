const { User } = require("../models");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const newUser = await User.create(body); 

    res.send(newUser);
  } catch (error) {
    next(error);
  }
};
