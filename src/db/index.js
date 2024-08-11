import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        /* process.exit(1) */
    } catch (error) {
        console.log("DATABASE IS NOT CONNECTED " + error)
        throw error
    }
}

export default connectDB