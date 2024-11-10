
import express from "express"
import dotenv from "dotenv"
import authroute from "./routes/auth.routes.js"
import bcrypt from "bcryptjs"
import connectDB from "./db/connectDB.js"


dotenv.config();
const app =express();
const PORT = process.env.PORT;

app.use(express.json());



app.use("/api/auth",authroute);





app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
    connectDB ();
})