const { default: mongoose } = require("mongoose");
const CustomerServiceMessages = require("../models/CustomerServiceMessage");

const CustomerServiceMessagesService = {
  CreateCustomerServiceMessage: async (data) => {
    const formattedIdUser = new mongoose.Types.ObjectId(data.idUser);
    const formattedIdCustomer = new mongoose.Types.ObjectId(data.idCustomer);
    let sender = "";
    if (data.idUser) {
      const formattedIdCustomerService = new mongoose.Types.ObjectId(
        data.idCustomerService,
      );
      sender = "USER";
      const dataToCreate = {
        idCustomerService: formattedIdCustomerService,
        idUser: formattedIdUser,
        message: data.message,
        sender: sender,
        edit: false,
      };
      const createMessage =
        await CustomerServiceMessages.insertOne(dataToCreate);
      return createMessage;
    }
    if (data.idCustomer) {
      const formattedIdCustomerService = new mongoose.Types.ObjectId(
        data.idCustomerService,
      );
      sender = "CUSTOMER";
      const dataToCreate = {
        idCustomerService: formattedIdCustomerService,
        idCustomer: formattedIdCustomer,
        message: data.message,
        sender: sender,
        edit: false,
      };
      const createMessage =
        await CustomerServiceMessages.insertOne(dataToCreate);
      return createMessage;
    }
  },

  GetMessagesByIdCustomerService: async (idCustomerService) => {
    const formattedId = new mongoose.Types.ObjectId(idCustomerService);
    const getByIdCustomerService = await CustomerServiceMessages.find({
      idCustomerService: formattedId,
    });
    return getByIdCustomerService;
  },

  GetMessagesById: async (id) => {
    const formattedId = new mongoose.Types.ObjectId(id);
    const getById = await CustomerServiceMessages.findOne({ _id: formattedId });
    return getById;
  },

  UpdateMessage: async (id, messageToUpdate) => {
    const formattedId = new mongoose.Types.ObjectId(id);
    const filter = { _id: formattedId };
    const updateMessage = {
      $set: { message: messageToUpdate.message, edit: true },
    };
    if (messageToUpdate.message) {
      const updateData = await CustomerServiceMessages.updateOne(
        filter,
        updateMessage,
        { new: true },
      );
      return updateData;
    }
    console.log(messageToUpdate.message);
    throw new Error("Somente o campo message pode ser editado");
  },
};

module.exports = CustomerServiceMessagesService;
