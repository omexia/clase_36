const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a Mongo
mongoose.connect('mongodb://127.0.0.1:27017/users');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

// Create server
app.listen(3000, () => {
    console.log("Server running on port 3000"); 
});