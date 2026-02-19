const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const Users = require("./src/routes/usersRoutes");
const Customers = require("./src/routes/customersRoutes");
const CustomerServicesRoutes = require("./src/routes/customerServiceRoutes");
const CustomerServiceMessagesRoutes = require("./src/routes/CustomerServiceMessageRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", users);
app.use("/api/customers", Customers);
app.use("/api/customer-services", CustomerServicesRoutes);
app.use("/api/messages", CustomerServiceMessagesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB conectado");
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
