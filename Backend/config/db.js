//Here i will create the logic to connect wit h database

import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://devanshBhadauria:DevanshBhadauria@cluster0.tkxdop7.mongodb.net/food-del').then(() => console.log("DB connected"));
}