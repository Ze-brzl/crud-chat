const CustomersService = require("../services/CustomersService");

exports.CreateCustomer = async (req, res) => {
  try {
    const newCustomer = await CustomersService.CreateCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetAllCustomers = async (req, res) => {
  try {
    const allCustomers = await CustomersService.GetAllCustomers({});
    res.status(201).json(allCustomers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetCustomerById = async (req, res) => {
  try {
    const customerById = await CustomersService.GetCustomerById(req.params);
    res.status(201).json(customerById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetCustomersByName = async (req, res) => {
  try {
    const getByName = await CustomersService.GetCustomersByName(req.body);
    res.status(201).json(getByName);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.UpdateCustomer = async (req, res) => {
  try {
    const update = await CustomersService.UpdateCustomer(req.params, req.body);
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
