const Product =require("../Models/Product");

const addProduct = async (req,res)=>{
    let success=false;
    try{
        const response=await Product.create(req.body);
        success=true;
        res.status(200).json({success,response});
    }
    catch(e){
        console.log("Error: ",e);
        res.status(500).json({success,error_message:e});
    }
}
module.exports=addProduct;