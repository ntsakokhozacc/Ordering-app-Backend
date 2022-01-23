const router = require('express').Router();
const { response } = require('express');
const res = require('express/lib/response');
const User = require('../models/user')

router.get('/',(req,res)=>{
    User.find().then(users =>{
        res.status(200).json(users)
    }).catch(err=> {
        response.status(500).json({error: err.message})
    })
})

module.exports = router;