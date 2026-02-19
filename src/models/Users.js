const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emailAddress: {
    type: String,
    required: true,
    index: { unique: true, sparse: true },
  },
  status: { type: String, require: true, enum: ["active", "inactive"] },
});

module.exports = mongoose.model("Users", userSchema);
