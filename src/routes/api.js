const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController")


router.post("/CreateProduct", productController.CreateProduct);



module.exports=router;