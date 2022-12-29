import express from "express";
import multer from "multer";
import { getAllProducts , insertProduct , deleteAllProducts } from "../controllers/productController.js";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null , "./images");
    },
    filename:(req,file,cb)=>{
        cb(null , Date.now() + "--" + file.originalname);
    }
})

const upload = multer({storage});

const router = express.Router();
router.use(express.json());

router.get("/getAllProducts" , getAllProducts);
router.post("/insertProduct" , upload.single("picture") , insertProduct );
router.delete("/deleteAllProducts" , deleteAllProducts);

export default router;