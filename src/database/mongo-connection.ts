import { config } from "../config/constants";
import mongoose from "mongoose";


export class MongoConnection { 
    public async connect(): Promise<void>{
        try {
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log("Connect Success")
        } catch (error) {
            console.log(error)
            process.exit()
        }
    }
}