const { default: mongoose } = require("mongoose");
const Customers = require("../models/Customers");

const CustomersService = {
  CreateCustomer: async (customerData) => {
    const existingCustomer = await Customers.findOne({
      ssn: customerData.ssn,
    });
    if (existingCustomer) {
      throw new Error("SSN já cadastrado");
    }
    const customer = await Customers.insertOne(customerData);
    return customer;
  },

  GetAllCustomers: async () => {
    const getCustomers = await Customers.find({});
    return getCustomers;
  },

  GetCustomerById: async (id) => {
    const newId = new mongoose.Types.ObjectId(id);
    const getById = await Customers.findById({ _id: newId });
    return getById;
  },

  GetCustomersByName: async (query) => {
    const getByName = await Customers.find({
      name: { $regex: query.name, $options: "i" },
    });
    if (getByName) {
      return getByName;
    }
    throw new Error("Cliente não encontrado");
  },

  UpdateCustomer: async (id, updateData) => {
    const newId = new mongoose.Types.ObjectId(id);
    const existingCustomer = await Customers.findOne({
      ssn: updateData.ssn,
      _id: { $ne: newId },
    });
    if (existingCustomer) {
      throw new Error("SSN já existe");
    }
    const update = await Customers.findByIdAndUpdate(newId, updateData, {
      new: true,
    });
    return update;
  },
};
module.exports = CustomersService;
