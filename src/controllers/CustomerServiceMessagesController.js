const CustomerServiceMessagesService = require("../services/CustomerServicesMessagesService");

exports.CreateCustomerServiceMessage = async (req, res) => {
  try {
    const createMessage =
      await CustomerServiceMessagesService.CreateCustomerServiceMessage(
        req.body,
      );
    res.status(201).json(createMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetMessagesByIdCustomerService = async (req, res) => {
  try {
    const getByCustomerService =
      await CustomerServiceMessagesService.GetMessagesByIdCustomerService(
        req.params,
      );
    res.status(201).json(getByCustomerService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.GetMessagesById = async (req, res) => {
  try {
    const getById = await CustomerServiceMessagesService.GetMessagesById(
      req.params,
    );
    res.status(201).json(getById);
  } catch (error) {
    res.status.json(400).json({ error: error.message });
  }
};

exports.UpdateMessage = async (req, res) => {
  try {
    const updateData = await CustomerServiceMessagesService.UpdateMessage(
      req.params.id,
      req.body,
    );
    res.status(201).json("Mensagem atualizada");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
