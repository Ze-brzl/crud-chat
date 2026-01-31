const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/usersRoutes");
const customersRoutes = require("./routes/customersRoutes");
const customerServicesRoutes = require("./routes/customerServiceRoutes");
const CSMessagesRoutes = require("./routes/CSMessagesRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/users", usersRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/customerServices", customerServicesRoutes);
app.use("/api/messages", CSMessagesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB conectado");
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
