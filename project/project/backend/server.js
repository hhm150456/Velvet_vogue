import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routers/userRoute.js'
import productRouter from './routers/productRoutl..js'
import cartRouter from './routers/cartRout.js'
import orderRouter from './routers/orderRout.js'
// APP Config
const app = express()
const port = process.env.port || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())
//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order/',orderRouter)



app.get('/',(req,res)=>{
    res.send("Api working")
})

app.listen(port,()=> console.log('server started on port: '+port))