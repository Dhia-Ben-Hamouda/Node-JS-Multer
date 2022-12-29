import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    picture:String,
})

export default mongoose.model("products" , productSchema);