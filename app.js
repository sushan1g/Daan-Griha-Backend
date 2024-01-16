import express from 'express';
import cors from 'cors';
import  bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './router/authRouter.js';
const server = express();


const DB = 'mongodb+srv://shreeshaaatreya1:IEbwYGMsEKUe811S@cluster0.ifiyo49.mongodb.net/Daan-Griha?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() =>{
    console.log('Connection successful');
}).catch((err) => console.log('Connection failed',err));

//Middleware
const middleware = (req,res,next) => {
    console.log("Hello Middleware");
    next();
}

server.use(cors());
server.use(bodyParser.json());




//api
server.use('/api/user' , router);



server.listen(8080,() => {
    console.log('Server Started');
});