const { default: mongoose } = require("mongoose");
const users = require("../models/users");

const usersService = {
  createUser: async (userData) => {
    const existingUser = await users.findOne({
      emailAdress: userData.emailAdress,
    });
    if (existingUser) {
      throw new Error("E-mail já cadastrado");
    }
    const user = await users.insertOne(userData);
    return user;
  },

  getAllUsers: async () => {
    const allUsers = await users.find({});
    return allUsers;
  },

  getUserById: async (id) => {
    const newId = new mongoose.Types.ObjectId(id);
    const userById = await users.findOne({ _id: newId });
    return userById;
  },

  getUserByName: async (query) => {
    const userByName = await users.find({
      name: { $regex: query.name, $options: "i" },
    });
    if (!userByName) {
      throw new Error("Usuário não encontrado");
    }
    return userByName;
  },

  updateUser: async (id, updateData) => {
    const newId = new mongoose.Types.ObjectId(id);
    if (updateData?.emailAddress) {
      const existingUser = await users.findOne({
        emailAddress: updateData.emailAddress,
        _id: { $ne: newId },
      });
      if (existingUser) {
        throw new Error("E-mail já cadastrado");
      }
    }
    const updateUser = await users.findByIdAndUpdate(newId, updateData, {
      new: true,
    });
    return updateUser;
  },
};

module.exports = usersService;
