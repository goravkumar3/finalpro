const express=require('express')
const routers=require('./router/storerouter')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",routers);
app.listen(5000,()=>{
console.log("port listening")
})