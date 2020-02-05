const express = require("express");
const mysqlcon = require("../connection");

const Router = express.Router();

//get all products
Router.get("/",(req,res)=>{
    mysqlcon.query("select * from products", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
});

//get all products
Router.get("/:id",(req,res)=>{
    mysqlcon.query("select * from products where pid=?", [req.params.id], (err, rows, fields)=>{
        console.log(rows);
        if(!err){
            if(rows.length==0)
            {
                res.send({ result: 'No record found with id '+req.params.id });
            }
            else{
                res.send(rows);
            }
        }
        else{
            console.log(err);
        }
    });
});

//insert a product
Router.post("/",(req,res)=>{
    let product = req.body;
    mysqlcon.query("insert into products (pname, price) values (?,?)", [product.pname, product.price], (err, rows, fields)=>{
        console.log(rows);
        if(!err){
            if(rows.affectedRows==1){
                res.send("Record inserted successfully with ID: "+rows.insertId);
            }
        }
        else{
            console.log(err);
        }
    });
});


module.exports = Router;