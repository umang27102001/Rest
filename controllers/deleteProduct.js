const Product =require("../Models/Product");

const deleteProduct=async(req,res)=>{
    try{
        const temp=await Product.findById(req.params.id);
        if(!temp){
            return res.status(404).json({success:false,message:"Not found"});
        }
        const response=await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true,response});
    }
    catch(e){
        console.log("Error: ",e);
        res.status(500).json({error:e});
    }
}
module.exports=deleteProduct;