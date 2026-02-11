const usersService = require("../services/usersService");

exports.createUser = async (req, res) => {
  try {
    const newUser = await usersService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const getUsers = await usersService.getAllUsers();
    res.status(201).json(getUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const getById = await usersService.getUserById(req.params);
    res.status(201).json(getById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserByName = async (req, res) => {
  try {
    const getByName = await usersService.getUserByName(req.body);
    res.status(201).json(getByName);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const update = await usersService.updateUser(req.params.id, req.body);
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
