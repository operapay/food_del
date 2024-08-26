import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://operapay:fooddel1234@cluster0.hqleq.mongodb.net/food-del').then(()=>console.log('DB Connected')));
}