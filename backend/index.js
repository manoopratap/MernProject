const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const uri = "mongodb://localhost:27017/Test";

mongoose.connect(uri,{useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("mongo db is connected")
})

app.use(express.json());
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');


app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);


app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
