import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
//import User from './models/auth.js';
//import auth from './models/auth.js';
//import connectDB from './connectMongoDb.js';

dotenv.config();
//connectDB();

const app=express();

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.get('/',(req,res)=>{
    res.send("This is a stackoverflow clone API")
})
app.use('/user',userRoutes)
const PORT=process.env.PORT||5000
const CONNECTION_URL="mongodb+srv://yaalu18:admin1@stack-overflow-clone.1qroguf.mongodb.net/"
mongoose.set('strictQuery', true); // Add this line here

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=>{
       console.log('mongodb connected')
    })
    .then(()=>
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`)
    }))
    .catch((err)=>console.log(err.message))
//app.listen(PORT,()=>{
//          console.log(`server running on port ${PORT}`)
//      })
