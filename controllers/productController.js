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
            picture: "http://node-js-multer-production.up.railway.app/" + req.file.filename
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

export async function deleteAllProducts(req,res){
    try{
        await Product.deleteMany({});

        return res.status(200).json({
            msg:"all products deleted succesfully"
        })
    }catch(err){
        return res.status(400).json({
            msg:"error while deleting all products"
        })
    }
}