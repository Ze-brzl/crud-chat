const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./src/routes/usersRoutes");
const customersRoutes = require("./src/routes/customersRoutes");
const customerServicesRoutes = require("./src/routes/customerServiceRoutes");
const CSMessagesRoutes = require("./src/routes/CSMessagesRoutes");

dotenv.config();

const app = express();

app.use(express.json());
console.log("registrando /users");
app.use("/api/users", users);
app.use("/api/customers", customersRoutes);
app.use("/api/customerServices", customerServicesRoutes);
app.use("/api/messages", CSMessagesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB conectado");
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
