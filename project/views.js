const express = require("express");
const Router = express.Router();
const path = require('path');

Router.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

Router.get("/shop",(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/shop.html'));
});

module.exports = Router;