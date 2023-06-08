// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');


// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');

// Body Parser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);


// Connect to  Mongo DB 
let URI = "mongodb://127.0.0.1:27017/ToDo";
let OPTION = { user: "", pass: "", autoIndex:true };

let connectMongo = mongoose.connect(URI, OPTION);
 
 connectMongo
.then(() => {   //.then is used to show success message using callback function
  console.log("Connection Success");
})

.catch((error) => {  // .catch is used to show error message using callback function
  console.log("Failed to connect to the database:", error);
});


//routing Implement

app.use("/api/v1",router);

//Undefined Route

app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})

module.exports=app;
