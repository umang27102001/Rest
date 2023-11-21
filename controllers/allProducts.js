const Product =require("../Models/Product");

const allProducts=async(req,res)=>{
    try{
        const response= await Product.find();
        res.status(200).json({response});
    }
    catch(e){
        console.log(e)
        res.status(500).json({error:e});
    }
}
module.exports=allProducts;