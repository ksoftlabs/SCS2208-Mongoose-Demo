const express = require("express");
const app = express();
const bodyParser=require("body-parser");

//Connect DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rad");

app.use(bodyParser.urlencoded({extended:true}));

//Routes
const employeeRoutes=require("./routes/employees");
app.use(employeeRoutes);

app.listen("3000",function () {
    console.log("Started");
});