const { default: mongoose } = require("mongoose");
const customers = require("../models/customers");

const customersService = {
  createCustomer: async (customerData) => {
    const existingCustomer = await customers.findOne({
      ssn: customerData.ssn,
    });
    if (existingCustomer) {
      throw new Error("SSN já cadastrado");
    }
    const customer = await customers.insertOne(customerData);
    return customer;
  },

  getAllCustomers: async () => {
    const getCustomers = await customers.find({});
    return getCustomers;
  },

  getCustomerById: async (id) => {
    const newId = new mongoose.Types.ObjectId(id);
    const getById = await customers.findById({ _id: newId });
    return getById;
  },

  getCustomersByName: async (query) => {
    const getByName = await customers.find({
      name: { $regex: query.name, $options: "i" },
    });
    if (getByName) {
      return getByName;
    }
    throw new Error("Cliente não encontrado");
  }, //Ajustar

  updateCustomer: async (id, updateData) => {
    const newId = new mongoose.Types.ObjectId(id);
    const existingCustomer = await customers.findOne({
      ssn: updateData.ssn,
      _id: { $ne: newId },
    });
    if (existingCustomer) {
      throw new Error("SSN já existe");
    }
    const update = await customers.findByIdAndUpdate(newId, updateData, {
      new: true,
    });
    return update;
  },
};
module.exports = customersService;
