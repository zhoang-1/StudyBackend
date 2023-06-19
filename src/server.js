import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRouters from "./route/web.js";
import connectDB from "./config/connectDB.js";

require('dotenv').config();

let app =express ();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRouters (app);

connectDB();

let port = process.env.PORT || 6969;
//port == undefined => port = 6969
app.listen(port, () =>{
    //callback
    console.log("Backend Nodejs is running on the  port : "+ port)
})
