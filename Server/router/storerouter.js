const express=require("express")
const router=express()
const customerModel=require("../config/coustomerColl")
const productModel=require("../config/product")
const cartModel=require('../config/cartCollection')
const register=require('../config/register')
const userValidator=require('../vaildate/userValidater')
const jwt=require('jsonwebtoken')
const secert="kashishkananana";
const multer=require('multer')
const nodemailer=require("nodemailer")
const fs=require('fs')
const path=require('path')
//upload image start
const dir=path.join(__dirname,'../media/productImage')
if(!fs.existsSync(dir)){
  fs.mkdirSync(dir)
}
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,dir)
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})

const upload=multer({storage:storage})
//upload image end
//nodemailer system
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'kg558390@gmail.com',
        pass: 'slhvmfyplbcoswxg'
    }
});


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
    const {productTitle,productDsecription,productPrice,productCategory}=req.body;
    const product=await productModel.create({
     productTitle,productDsecription,productPrice,productCategory 
    })
    res.status(200).json({product,filedata:req.file})
   } catch (error) {
      res.status(403).json({err:error});
   }   
})
router.post('/upload',upload.single('productImage'),(req,res)=>{
  try {
    res.status(200).json({msg:"uploaded",fileData:req.file})
    
  } catch (error) {
      res.status(501).json({error})
  }
})
//cart collection
router.post('/addToCart',async(req,res)=>{
  try {
    const {productId,userId,price,quantity}=req.body;
    const cart=await cartModel.create({
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
      const mailOptions = {
        from: 'kg558390@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Verify your account', // Subject line
        html: `Check your otp num :${otp}`// plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
         if(err)
           console.log(err)
          else
          res.status(200).json({msg:"user registered",info,token})
      });
    }
   } catch (error) {
      res.status(403).json({err:error});
   }   
})

module.exports=router;