var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/products");
const categoriaRoutes = require("./routes/categoria");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://dbuser:axX43PSIIPbZra2f@cluster0.s4e6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
  .then(() => {
    console.log("Estamos conectados");
  });

app.use("/api/products", productsRoutes);
app.use("/api/categoria", categoriaRoutes);

module.exports = app;
