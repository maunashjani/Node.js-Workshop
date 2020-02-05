const express = require("express");
const bodyParser = require("body-parser");

const productsRoutes = require("./routes/products");

const viewsRoutes = require("./views");

var app = express();
app.use(bodyParser.json());

app.use("/products", productsRoutes);
app.use("/views", viewsRoutes);

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.get("/demo",(req,res)=>{
    res.send("Demo code!");
});



app.listen("3000",()=>{
    console.log("Server running at port 3000")
});

