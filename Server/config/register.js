const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/store")
const registerScheme=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    },otp:{
        type:String,
        required:true
    },
    isVerify:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("register",registerScheme)