const express = require('express');
const router = express.Router();
const user = require('../models/user.model');
const validator = require('../middleware/validator');

router.get('/', async(req, res)=>{
    try {
        const data = await user.find().lean().exec();
        res.status(200).json({user: data});
    }
    catch (err) {
        res.status(404).json({message: err.message});
    }
})

router.post('/', validator({
        firstName: ["required"],
        lastName: ["required"],
        email: ["required", "email"],
        pincode: ["required", "exactLength:6:digits"],
        age: ["required", "isBetween:1:100"],
        gender: ["required", "enum:male:female:others"]
    }), 
    async (req, res)=>{

        if(Object.keys(req.errors).length > 0){
            return res.status(400).json({data: req.errors})
        }
        
        const input = req.body;
        const data = await user.create(input);
        return res.status(200).json({user: data});
})

module.exports = router;