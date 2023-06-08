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


// exports.UserLogin = async (req,res) => {

//     let UserName = req.body["UserName"];
//     let Password = req.body["Password"];
//     // res.status(200).json({status:"success", data:Password})====> to check 

//     try{    
//         const data =await ProfileModel.find({UserName: UserName,Password: Password});
       
//        if(data.length>0){

//                 //Create Auth Token
//                 let Payload={exp: Math.floor(Date.now() / 1000) + (24*60 * 60), data:data[0]};
//                 var token = jwt.sign(Payload, 'sk4321DDG456478954');
                
//                  res.status(200).json({status:"success", token:token, data:data[0]})
//             }
//         else{
//                 res.status(401).json({status:"unauthorized"})
//             }
//     }
        
//         catch(err){
//             res.status(400).json({status:"fail", data:err})
//         }
     
    
// };