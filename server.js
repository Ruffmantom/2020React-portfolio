// Requiring necessary npm packages
var express = require("express");
const path = require("path");
var app = express();
require('dotenv').config()
const sendMail = require("./mail.js");
const nodemailer = require('nodemailer');
var PORT = process.env.PORT || 3001;


// for sending email
// ------------------------
// data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/email',(req,res) =>{
    // todo
    // send email here
    const {fullName, email, message} = req.body;

    console.log('----------');
    console.log('data:' , {fullName, email, message});
    console.log('------------');

    sendMail(fullName, email, message, function(err,data){
        if(err){
            res.status(500).json({message: "Internal error"})
        } else{
            res.status(200).json({message:"Email Sent!!"});
        }
    });
});




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// app listening to server
app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:" + PORT);
});


