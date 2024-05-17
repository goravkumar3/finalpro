const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/store")
const cartScheme=new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    userId:{
        type:String
    },
    price:{
        type:String,
        required:true
    },quantity:{
        type:Array
    }
})
module.exports=mongoose.model("cart",cartScheme)