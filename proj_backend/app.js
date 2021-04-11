require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const app = express();
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//My Routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")



//DB CONNECTION
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED")
});



//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



//ROUTES
app.use("/api",authRoutes);
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
//app.use("/api",authroutes)



//PORT
const port = process.env.PORT||8000;


//SERVER
app.listen(port,()=>{
    console.log(`app is up and running at port ${port}`);
}) 