const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.port || 3000;

const app = express();
app.use(cors());

app.get('/', (req,res)=>{
    res.send("get works");
})

app.listen(port,() =>{
    console.log('app running');
})
