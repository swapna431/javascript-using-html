const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const app=express()
dotenv.config()
mongoose.connect(process.env.URI)
.then(()=>{
    console.log("Database connectes")
})
.catch((err)=>{
    console.log("error in connecting with database",err)
})
app.listen(5050,()=>{
    console.log("server started")
})