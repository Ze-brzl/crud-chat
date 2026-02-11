const customers = require("../models/customers");

const customersService = {
  createCustomer: async (customerData) => {
    const existingCustomer = await customers.findOne({
      ssn: customerData.ssn,
    });
    if (existingCustomer) {
      throw new Error("SSN já cadastrado");
    }

    const customer = new customers(customerData);
    await customers.save();
    return customer;
  },
};
module.exports = customersService;
