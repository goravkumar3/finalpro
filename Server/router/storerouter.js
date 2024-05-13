const express=require("express")
const router=express()
const customerModel=require("../config/coustomerColl")
//customer register
router.post('/api/payment',async(req,res)=>{
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

app.post('/api/productCreate',()=>{
   
})