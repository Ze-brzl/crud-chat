const { default: mongoose } = require("mongoose");
const Users = require("../models/Users");

const UsersService = {
  CreateUser: async (userData) => {
    const existingUser = await Users.findOne({
      emailAdress: userData.emailAdress,
    });
    if (existingUser) {
      throw new Error("E-mail já cadastrado");
    }
    const user = await Users.insertOne(userData);
    return user;
  },

  GetAllUsers: async () => {
    const allUsers = await Users.find({});
    return allUsers;
  },

  GetUserById: async (id) => {
    const newId = new mongoose.Types.ObjectId(id);
    const userById = await Users.findOne({ _id: newId });
    return userById;
  },

  GetUserByName: async (query) => {
    const userByName = await Users.find({
      name: { $regex: query.name, $options: "i" },
    });
    if (!userByName) {
      throw new Error("Usuário não encontrado");
    }
    return userByName;
  },

  UpdateUser: async (id, updateData) => {
    const newId = new mongoose.Types.ObjectId(id);
    if (updateData?.emailAddress) {
      const existingUser = await Users.findOne({
        emailAddress: updateData.emailAddress,
        _id: { $ne: newId },
      });
      if (existingUser) {
        throw new Error("E-mail já cadastrado");
      }
    }
    const updateUser = await Users.findByIdAndUpdate(newId, updateData, {
      new: true,
    });
    return updateUser;
  },
};

module.exports = UsersService;
