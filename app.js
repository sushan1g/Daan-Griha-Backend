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




server.get('/demo',middleware,
(req,res) => {
    console.log(req.body)
    res.send('hello World');
});



server.get('/signup',
(req,res) => {
    console.log(req.body)
    res.send('Signup Connected');
});
server.post('/login',(req,res) => {
    console.log(req.body)
    res.send('Login Connected');
});
server.post('/about',(req,res) => {
    res.send('About Page')
});
server.post('/contact' , (req,res) => {
    res.send('Contact page')
});
server.post('/reset' ,(req,res) => {
    res.send ('Reset page')
});

//api
server.use('/auth' , router);



server.listen(8080,() => {
    console.log('Server Started');
});