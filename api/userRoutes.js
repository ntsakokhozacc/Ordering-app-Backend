const router = require('express').Router()
const { response } = require('express')
const res = require('express/lib/response')
const user = require('../models/user')
const User = require('../models/user')

router.get('/',(req,res)=>{
    User.find().then((users) => {
        res.status(200).json(users)
    }).catch((err)=> {
        response.status(400).json({error: err.message})
    })      
})

router.post('/register',async (req,res)=>{
    if (await userExists(req.body.email)){
        res.status(409).json({error:'Email already exists'})
    }else{
        const newUser = new User(req.body)
        newUser.save().then(user=>{
            res.status(201).json(user)
        }).catch(err =>{
            res.status(500).json({error:err.message})
        })
    }
    
})

router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email, password:req.body.password}).then(user=>{
        if(user){
            res.status(200).json(user)
        }else{
            res.status(401).json({error:'Incorrect email address or password'})
        }
    }).catch(err=>{
        res.status(500).json({err:err.message})
    })
})

const userExists = async (email) =>{

    const user = await User.findOne({email: email.toLowerCase().trim()})
        if (user){
            return true;
        }else{
            return false;
        }
    
}


module.exports = router;