// require('dotenv').config({path:'./env'}) /**this is not best because we used module type, / : menas home directory er moddhei env ache*/

import dotenv from 'dotenv';

import mongoose from "mongoose";

import express from 'express'
import connectDB from './db/index.js';
const app=express()

dotenv.config({
    path:'./.env'
})

connectDB();















// ife 
//connect data base (this is one approach)
/*(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR:",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log("App is running on port ${process.env.PORT}")
       })
        
    } catch (error) {
        console.error("ERROR :" ,error)
        throw error
        
    }

})()
*/