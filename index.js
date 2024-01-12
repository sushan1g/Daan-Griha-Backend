import express from 'express';
import cors from 'cors';
import  bodyParser from 'body-parser';
import mongoose from 'mongoose';

const DB = 'mongodb+srv://shreeshaaatreya1:IEbwYGMsEKUe811S@cluster0.ifiyo49.mongodb.net/Daan-Griha?retryWrites=true&w=majority';

mongoose.connect(DB).then(() =>{
    console.log('Connection successful');
}).catch((err) => console.log('Connection failed'));


const server = express();
 
server.use(cors());
server.use(bodyParser.json());

server.post('/demo',(req,res) => {
    console.log(req.body)
    res.send('hello');
});

server.listen(8080,() => {
    console.log('Server Started');
});