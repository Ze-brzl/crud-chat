const CustomerServicesService = require("../services/CustomerServicesServices");

exports.CreateCustomerService = async (req, res) => {
  try {
    const newCustomerService =
      await CustomerServicesService.CreateCustomerService(req.body);
    res.status(201).json(newCustomerService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetAllCustomerService = async (req, res) => {
  try {
    const allCustomerServices =
      await CustomerServicesService.GetAllCustomerService();
    res.status(201).json(allCustomerServices);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetCustomerServiceById = async (req, res) => {
  try {
    const getById = await CustomerServicesService.GetCustomerServiceById(
      req.params,
    );
    res.status(201).json(getById);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

exports.GetCustomerServiceByStatus = async (req, res) => {
  try {
    const getByStatus =
      await CustomerServicesService.GetCustomerServiceByStatus(req.body);
    res.status(201).json(getByStatus);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

exports.UpdateCustomerService = async (req, res) => {
  try {
    const update = await CustomerServicesService.UpdateCustomerService(
      req.params.id,
      req.body,
    );
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};
