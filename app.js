const dotenv=require('dotenv')
const mongoose=require('mongoose')
const express=require('express')
const app=express();
const cors=require('cors');
app.use(cors());
dotenv.config({path:'./config.env'});
require('./db/conn')
 const User=require('./model/userSchema')

app.use(express.json());

// we Link the router files to make our route easy
app.use(require('./router/auth'))

const PORT=process.env.PORT;




app.listen(PORT,()=>{
    console.log(`server is up ${PORT}`)
})