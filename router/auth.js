const express=require('express');
const MongoClient = require("mongodb").MongoClient; 
const router=express.Router();
const cors=require('cors')
router.get('/',(req,res)=>{
    res.send(`Hello world from server auth`)
})
router.get('/seeall',(req,res) => {
    res.json();
})

const url =  "mongodb+srv://Jithin123:JithinReddy@cluster0.9btj3by.mongodb.net/?retryWrites=true&w=majority"
const databasename = "JithinDB";
const db=require('../db/conn'); 
const client=new MongoClient(url)
async function createUser(data)
{
        const connect = client.db(databasename); 
        const collection = connect.collection("whatsapp");
        collection.insertOne({"name": data.name, "message": data.message }); 
        console.log("Insertion Successful") 
    
}
router.post('/add',(req,res)=>{
    const data=req.body;
    console.log(data + "backend");
   createUser(data);

    res.json({message:req.body});
})
module.exports = router;