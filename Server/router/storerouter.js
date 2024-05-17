const express=require("express")
const router=express()
const customerModel=require("../config/coustomerColl")
const productModel=require("../config/product")
//customer register
router.post('api/payment',async(req,res)=>{
   try {
    const {fullname,phone,address,email,city,postolCode}=req.body;
    const checkUser=await customerModel.find({email})
    if(checkUser){
      res.json({msg:"This user is already register"});
    }else{
    const customer=await customerModel.create({
      fullname,phone,address,email,city,postolCode
    })
    res.status(200).json(customer)
    }
   } catch (error) {
      res.status(403).json({err:error});
   }

})

router.post('api/productCreate',async(req,res)=>{
  try {
    const {productTitle,productDsecription,productPrice,productColor,productQuantity}=req.body;
    const product=await productModel.create({
     productTitle,productDsecription,productPrice,productColor,productQuantity
    })
    res.status(200).json(product)
   } catch (error) {
      res.status(403).json({err:error});
   }   
})

module.exports=router;