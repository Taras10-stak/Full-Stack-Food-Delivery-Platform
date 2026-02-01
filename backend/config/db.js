
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tarasyc14_db_user:foodie123@cluster0.5dsynfz.mongodb.net/FoodieFrenzy')
        .then(() => console.log('DB CONNECTED'))
}