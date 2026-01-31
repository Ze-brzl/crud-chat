const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emailAdress: { type: String, required: true, unique: true },
  status: { type: String, require: true, enum: ["active", "inactive"] },
});

module.exports = mongoose.model("Users", userSchema);
