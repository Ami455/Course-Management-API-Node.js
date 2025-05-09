const mongoose = require("mongoose");
const env= require("dotenv").config();

const connection = ()=> mongoose.connect(process.env.CONNECTION_STRING);

module.exports = connection;