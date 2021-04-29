const express = require("express");

const app = express();

const routes = require("./routes/clienteRota");


app.use(express.json());

app.use("/clienteRota", routes);

module.exports = app.listen(3000, () => {
  console.log("Server Runing!!");
});
