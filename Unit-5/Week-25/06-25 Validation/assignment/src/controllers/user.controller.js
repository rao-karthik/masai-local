const express = require('express');
const router = express.Router();
const user = require('../models/user.model');
const { body, validationResult, check } = require('express-validator');

router.get('/', async(req, res)=>{
    try {
        const data = await user.find().lean().exec();
        res.status(200).json({user: data});
    }
    catch (err) {
        res.status(404).json({message: err.message});
    }
})

router.post('/', 
    body("firstName").not().isEmpty().withMessage("first name is required"),
    body('lastName').not().isEmpty().withMessage("last name is required"),
    body('email').isEmail().withMessage("email.is required and should be a valid email"),
    body('pincode').isLength({min: 6, max: 6}).withMessage("pincode is required and must be 6 characters long"),
    body('age').isInt({min: 1, max: 100}).withMessage("age is requires and should be between 1-100"),
    body('gender').isIn(['male', 'female', 'others']).withMessage("gender is required and should be male, female or others"),
    async (req, res)=>{

        const errors = validationResult(req);
        console.log(errors)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const input = req.body;
        const data = await user.create(input);
        return res.status(200).json({user: data});
})

module.exports = router;