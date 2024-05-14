const express=require('express')
const routers=require('./router/storerouter')
const app=express()
app.use("/",routers);
app.listen(5000,()=>{
console.log("port listening")
})