const customersService = require("../services/customersService");

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await customersService.createCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await customersService.getAllCustomers({});
    res.status(201).json(allCustomers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customerById = await customersService.getCustomerById(req.params);
    res.status(201).json(customerById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCustomersByName = async (req, res) => {
  try {
    const getByName = await customersService.getCustomersByName(req.body);
    res.status(201).json(getByName);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const update = await customersService.updateCustomer(req.params, req.body);
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
