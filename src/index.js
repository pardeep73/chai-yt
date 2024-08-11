import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:".env"
})



connectDB()

/* ;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("error: ",error);
            throw error
        })

        app.listen(process.env.PORT || 3000,()=>{
            console.log("app is running successfully "+process.env.PORT);
        })
    } catch (error) {
        console.log(error);
        throw error
    }
})()
.then(()=>{
    console.log("database connected successfully")
})
.catch((error)=>{
    console.log("error: ",error)
})

 */