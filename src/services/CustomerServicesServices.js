const { default: mongoose } = require("mongoose");
const CustomerServices = require("../models/CustomerService");
const Users = require("../models/Users");
const Customers = require("../models/Customers");

const CustomerServicesService = {
  CreateCustomerService: async (customerServiceData) => {
    const newIdUser = new mongoose.Types.ObjectId(customerServiceData.idUser);
    const newIdCustomer = new mongoose.Types.ObjectId(
      customerServiceData.idCustomer,
    );
    const userStatusValidator = (
      await Users.find(
        { _id: customerServiceData.idUser },
        { _id: 0, status: 1 },
      )
    ).toString();
    const customerStatusValidator = (
      await Customers.find(
        { _id: customerServiceData.idCustomer },
        { _id: 0, status: 1 },
      )
    ).toString();
    if (userStatusValidator.includes("inactive")) {
      throw new Error("Usuário inativo");
    } else if (customerStatusValidator.includes("inactive")) {
      throw new Error("Cliente inativo");
    }
    const createCustomer = await CustomerServices.insertOne({
      idUser: newIdUser,
      idCustomer: newIdCustomer,
      status: customerServiceData.status,
    });
    return createCustomer;
  },

  GetAllCustomerService: async () => {
    const allCustomerServices = await CustomerServices.find();
    return allCustomerServices;
  },

  GetCustomerServiceByStatus: async (queryStatus) => {
    if (!queryStatus.status) {
      throw new Error("Somente consultas pelo campo status são permitidas");
    }
    const getByStatus = await CustomerServices.find(queryStatus);
    return getByStatus;
  },

  GetCustomerServiceById: async (id) => {
    const newId = new mongoose.Types.ObjectId(id);
    const getById = await CustomerServices.findById({ _id: newId });
    return getById;
  },

  UpdateCustomerService: async (id, updateData) => {
    const newId = new mongoose.Types.ObjectId(id);
    if (updateData.status) {
      const updateCustomerService = await CustomerServices.findByIdAndUpdate(
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
module.exports = CustomerServicesService;
