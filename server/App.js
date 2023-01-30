const express = require('express');
const dotenv =require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fileUpload = require("express-fileupload")


const app=express();
app.use(cookieParser());

dotenv.config({path:"./config.env"})
const PORT=process.env.PORT;

// Database
const db= process.env.DATABASE;
require("./DB/conn")

app.use(express.json());

app.use(require("./Router/auth"));

app.use(fileUpload({
    useTempFiles:true
}))

if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})  