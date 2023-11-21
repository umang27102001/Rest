const express = require("express");
const bodyParser=require("body-parser");
const productRouter=require("./Routes/productRoute");
const connectToDb=require("./DB");

//create an express App.
const app=express();

//MongoDb connection utility...
connectToDb();

//using bodyparser and express.json() middlewares inside app.use() so that for every request made on the server, I can acess req.body and send res.json().
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

//using Route related to products...
app.use(productRouter);

//server linstening :)
app.listen(8080,()=>{
    console.log("App Listening at http://localhost:8080");
})