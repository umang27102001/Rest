const Product =require("../Models/Product");
const updateProduct=async(req,res)=>{
    try{
        const temp=await Product.findById(req.params.id);
        if(!temp){
            return res.status(404).json({message:"Not found"});
        }
        const response=await Product.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(response);
    }
    catch(e){
        console.log(e);
        res.status(500).json({error:e});
    }
}
module.exports=updateProduct