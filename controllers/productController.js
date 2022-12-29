import Product from "../models/product.js";

export async function getAllProducts(req,res){
    try{
        const products = await Product.find();

        return res.status(200).json(products);
    }catch(err){
        return res.status(400).json({
            msg:"error while fetching products"
        })
    }
}

export async function insertProduct(req,res){
    try{
        const { name , price } = req.body;

        await Product.create({
            name,
            price,
            picture: "http://localhost:5000/" + req.file.filename
        })

        return res.status(201).json({
            msg:"product created successfully"
        })
    }catch(err){
        return res.status(400).json({
            msg:"error while inserting product"
        })
    }
}