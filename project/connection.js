const mysql = require("mysql");

var mysqlcon = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "shopDB",
    multipleStatements: true
});

mysqlcon.connect((err)=>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log("Not Connected");
    }
});

module.exports = mysqlcon;