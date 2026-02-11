const mongoose = require("mongoose");

const customerServiceSchema = new mongoose.Schema({
  idUser: { type: mongoose.Types.ObjectId, required: true },
  idCustomer: { type: mongoose.Types.ObjectId, required: true },
  status: { type: String, required: true, enum: ["FINISHED", "INPROGRESS"] },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("CustomerService", customerServiceSchema);
