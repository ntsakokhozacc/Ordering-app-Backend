require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.port || 3000;

//Route
const userRoutes = require('./api/userRoutes')

const app = express()
app.use(cors())
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("get works")
})

app.use('/users',userRoutes)


mongoose.connect(process.env.MONGODB,{useUnifiedTopology:true})
.then(()=>{
    app.listen(port, ()=>{
        console.log('app running...')
    })
})

// app.listen(port,() =>{
//     console.log('app running');
// });
