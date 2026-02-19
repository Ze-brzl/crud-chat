const UsersService = require("../services/UsersService");

exports.CreateUser = async (req, res) => {
  try {
    const newUser = await UsersService.CreateUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetAllUsers = async (req, res) => {
  try {
    const getUsers = await UsersService.GetAllUsers();
    res.status(201).json(getUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetUserById = async (req, res) => {
  try {
    const getById = await UsersService.GetUserById(req.params);
    res.status(201).json(getById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetUserByName = async (req, res) => {
  try {
    const getByName = await UsersService.GetUserByName(req.body);
    res.status(201).json(getByName);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const update = await UsersService.UpdateUser(req.params.id, req.body);
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
