const { default: mongoose } = require("mongoose");
const customerServices = require("../models/customerService");
const users = require("../models/users");
const customers = require("../models/customers");

const CSServices = {
  createCustomerService: async (customerServiceData) => {
    const newIdUser = new mongoose.Types.ObjectId(customerServiceData.idUser);
    const newIdCustomer = new mongoose.Types.ObjectId(
      customerServiceData.idCustomer,
    );
    const userStatusValidator = (
      await users.find(
        { _id: customerServiceData.idUser },
        { _id: 0, status: 1 },
      )
    ).toString();
    const customerStatusValidator = (
      await customers.find(
        { _id: customerServiceData.idCustomer },
        { _id: 0, status: 1 },
      )
    ).toString();
    if (userStatusValidator.includes("inactive")) {
      throw new Error("Usuário inativo");
    } else if (customerStatusValidator.includes("inactive")) {
      throw new Error("Cliente inativo");
    }
    const createCustomer = await customerServices.insertOne({
      idUser: newIdUser,
      idCustomer: newIdCustomer,
      status: customerServiceData.status,
    });
    return createCustomer;
  },

  getAllCustomerService: async () => {
    const allCustomerServices = await customerServices.find();
    return allCustomerServices;
  },

  getCustomerServiceByStatus: async (queryStatus) => {
    if (!queryStatus.status) {
      throw new Error("Somente consultas pelo campo status são permitidas");
    }
    const getByStatus = await customerServices.find(queryStatus);
    return getByStatus;
  },

  getCustomerServiceById: async (id) => {
    const newId = new mongoose.Types.ObjectId(id);
    const getById = await customerServices.findById({ _id: newId });
    return getById;
  },

  updateCustomerService: async (id, updateData) => {
    const newId = new mongoose.Types.ObjectId(id);
    if (updateData.status) {
      const updateCustomerService = await customerServices.findByIdAndUpdate(
        newId,
        updateData,
        {
          new: true,
        },
      );
      return updateCustomerService;
    }
    throw new Error("Somente o status pode ser editado");
  },
};
module.exports = CSServices;
