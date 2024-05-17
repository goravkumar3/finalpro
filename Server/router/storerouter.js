const express=require("express")
const router=express()
const customerModel=require("../config/coustomerColl")
const productModel=require("../config/product")
const cart=require('../config/cartCollection')
const register=require('../config/register')
const userValidator=require('../vaildate/userValidater')
const jwt=require('jsonwebtoken')
const secert="kashishkananana";
//customer payment method
router.post('/payment',async(req,res)=>{
   try {
    const {fullname,phone,address,email,city,postolCode}=req.body;
    const customer=await customerModel.create({
      fullname,phone,address,email,city,postolCode
    })
    res.status(200).json(customer)
   } catch (error) {
      res.status(403).json({err:error});
   }

})
//product collection
router.post('/productCreate',async(req,res)=>{
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
//cart collection
router.post('/addToCart',async(req,res)=>{
  try {
    const {productId,userId,price,quantity}=req.body;
    const cart=await cart.create({
      productId,userId,price,quantity})
    res.status(200).json(cart)
   } catch (error) {
      res.status(403).json({err:error});
   }   
})

//register collection
router.post('/register',async(req,res)=>{
  try {
    await userValidator.validateAsync(req.body)
    const {fullname,email,password}=req.body;
    const checkUser=await register.findOne({email})
    if(checkUser){
      res.json({msg:"This user is already register"});
    }else{
      const otp=Math.floor(100000+Math.random()*900000);
    const registerUser=await register.create({
      fullname,email,password,otp})
      const userid=registerUser._id
      const token=await jwt.sign({userId:userid},secert)
      console.log(userid)
    res.status(200).json({msg:"user registered",registerUser,token})
    }
   } catch (error) {
      res.status(403).json({err:error});
   }   
})

module.exports=router;