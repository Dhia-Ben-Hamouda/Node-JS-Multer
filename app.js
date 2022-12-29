import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// middleware

dotenv.config();
app.use(cors({
    origin:"*"
}));
app.use(express.json());
app.use(express.static("images"));
mongoose.set('strictQuery', true);

// env variables

const port = process.env.PORT || 5000;
const url = process.env.URL;

// connecting to mongoDB

mongoose.connect(url)
.then(()=>{console.log("connected to mongoDB !")})
.catch((err)=>{console.error(err)})

// launching the app

app.listen(port , ()=>{
    console.log(`listening to requests on port ${port}`);
})

// handle routes

app.use("/products" , productRoutes);