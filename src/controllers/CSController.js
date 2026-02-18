const CSServices = require("../services/CSServices");

exports.createCustomerService = async (req, res) => {
  try {
    const newCustomerService = await CSServices.createCustomerService(req.body);
    res.status(201).json(newCustomerService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCustomerService = async (req, res) => {
  try {
    const allCustomerServices = await CSServices.getAllCustomerService();
    res.status(201).json(allCustomerServices);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCustomerServiceById = async (req, res) => {
  try {
    const getById = await CSServices.getCustomerServiceById(req.params);
    res.status(201).json(getById);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

exports.getCustomerServiceByStatus = async (req, res) => {
  try {
    const getByStatus = await CSServices.getCustomerServiceByStatus(req.body);
    res.status(201).json(getByStatus);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

exports.updateCustomerService = async (req, res) => {
  try {
    const update = await CSServices.updateCustomerService(
      req.params.id,
      req.body,
    );
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};
