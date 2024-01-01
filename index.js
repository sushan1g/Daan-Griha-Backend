import express from 'express';
const server = express();

server.get('/demo',(req,res) => {
    res.send('hello');
});

server.listen(8080,() => {
    console.log('Server Started');
});