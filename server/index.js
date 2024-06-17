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
const baseUrl = process.env.BASE_URL;
console.log(`Base URL is: ${baseUrl}`);

const app=express();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
<<<<<<< HEAD
app.get('/',(req,res)=>{
    
    //res.send("This is a stackoverflow clone API")
    res.send("This is a stackoverflow clone API i made a change")
})
app.post('/user/login', (req, res) => {
    console.log('no problem server side, problem is on hosting environment')
    const {email,passsword } = req.body;
    // Perform login logic
    res.json({ message: 'Login successful' });
   //console.log(password);
   console.log(`Received slogin request for ${email} and password ${password}`);
});
app.post('/user/signup', (req, res) => {
    console.log('no problem server side, problem is on hosting environment')
    const {name,email,passsword } = req.body;
    // Perform login logic
    res.json({ message: 'Signup successful' });
    //console.log('password'password);
    console.log(`Received signup request for ${name} with email ${email} and password ${password}`);
});
app.get('/test', (req, res) => {
    res.send('Test route');
  });
  app.get('/check', (req, res) => { // Corrected route definition
    res.send('checking...');
});

app.use('/user',userRoutes)
=======
app.post('/',(req,res)=>{
    res.send("This is a stackoverflow clone API")
})
app.post('/user/signup', (req, res) => {
    console.log('no problem server side')
    const { name,email,password } = req.body;
    console.log(username)
    // Perform login logic
    res.json({ message: 'signup sucessfull' });
    console.log(`Received signup request for ${name} with email ${email} and password ${password}`);
});
app.post('/user/login', (req, res) => {
    console.log('no problem server side')
    const { email,password } = req.body;
    console.log(username)
    // Perform login logic
    res.json({ message: 'Login successful' });
});
//app.use('/user',userRoutes)
>>>>>>> 6c8295d3abfce5b9dd86fb81e1c7d230047ae650
const PORT=process.env.PORT||5000
const CONNECTION_URL="mongodb+srv://yaalu18:admin1@stackoverflow-backend-d.ecqpkpw.mongodb.net/";
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
export default app;
<<<<<<< HEAD


=======
>>>>>>> 6c8295d3abfce5b9dd86fb81e1c7d230047ae650
