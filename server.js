const express = require('express');
require('dotenv').config();
const port = 2020;
const routes = require('./Routes/api');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded(false));
app.use(express.json());
const env = require('./env');


/* mongoose.connect('mongodb://127.0.0.1:27017/KaleDB')
.then(()=>{console.log("connected to database")})
.catch(()=>{console.log("Error connecting to database")}); */

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("Successfully connected to DB"))
.catch(()=>console.log("Error connecting to DB"))


app.use(routes);


app.listen(port, ()=>{
    console.log("listening on port " + port);
})

