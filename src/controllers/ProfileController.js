const productModel = require("../models/productModel");

exports.CreateProduct = (req,res)=>{ 
    let reqBody = req.body;         
    productModel.create(reqBody)    
                                    
        .then((data)=>{
            res.status(200).json({status:"success", data:data})
        })
        .catch((err)=>{
            res.status(400).json({status:"fail", data:err})
        })
        
    
};
