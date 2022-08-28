const express = require("express");
const router =express.Router();
const Employee=require("../models/employee");

//Create
router.post("/employees",function (req,res){
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let salary=req.body.salary;
    console.log(name,email,phone,salary);

    let newEmployee={name:name,email:email,phone:phone,salary:salary};

    Employee.create(newEmployee,function (err,employee){
        if(err){
            console.log(err);
        }else{
            res.send(employee);
        }
    });
});

//Retrive
router.get("/employees",function (req,res){
    Employee.find({},function (err,employees){
        if(err){
            console.log(err);
        }else{
            res.send(employees);
        }
    });
});

//Update
router.put("/employees/:id",function (req,res){
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let salary=req.body.salary;

    let editEmployee={name:name,email:email,phone:phone,salary:salary};

    Employee.findByIdAndUpdate(req.params.id,editEmployee,function (err,employee){
        if(err){
            console.log(err);
        }else{
            res.send(employee);
        }
    })
});


//Delete
router.delete("/employees/:id",function (req,res){
    Employee.findByIdAndRemove(req.params.id,function (err){
        if(err){
            console.log(err);
        }else {
            res.send(req.params.id+" deleted successfully!")
        }
    })
});

module.exports=router;