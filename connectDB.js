import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connected")
        
    } catch (error) {
        console.log(`error in connecting in DB: ${error}`);
        process.exit(1);
        
    }
}
export default connectDB;