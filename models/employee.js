const mongoose=require("mongoose");

let employeeSchema= new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    salary:Number
});

module.exports=mongoose.model("Employee",employeeSchema);