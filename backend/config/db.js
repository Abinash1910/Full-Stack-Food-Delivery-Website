import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:593000@cluster0.2ajk6.mongodb.net/new_food').then(()=>console.log("DB Connected"));
}