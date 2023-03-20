import express from 'express';
import mongoose from 'mongoose';
import * as dotnev from 'dotenv';
import  error  from 'console';
import cors from 'cors'
dotnev.config();


import EmailRouter from './routes/EmailRoutes.js'
import UserRoute from './routes/UserRoutes.js'
import QuntumRoute from './routes/QuantumRoute.js';

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }

app.use(express.json())
app.use(cors(corsOptions))

async function connectBD(){
    await mongoose
    .connect(process.env.DB_URL,{useNewURLParser: true, useUnifiedTopology: true})
    .then(res => console.log('connect to DB'))
    .catch(error => console.log(error));
}

connectBD()

app.listen(process.env.PORT, error =>{
    error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
})

app.use(EmailRouter)
app.use(UserRoute)
app.use(QuntumRoute)

app.use((req,res)=>{
    res.status(404).send('Error');
})