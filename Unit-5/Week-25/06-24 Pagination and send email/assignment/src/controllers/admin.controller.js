const express = require('express');
const admin = require('../models/admin.model');
const transporter = require('../config/emailConfig');

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const data = await admin.find({}, {email: true}).lean().exec();
        res.status(200).json({data});
    }
    catch (err) {
        res.status(404).json({message: "something went wrong"});
    }
});

router.post('/', async (req, res)=> {
    try {
        const inp = req.body;
        const data = await admin.create(inp);
        res.status(201).json(data);
    }
    catch (err) {
        res.status(404).json({message: "error occured"});
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        await admin.findByIdAndDelete(id);
        res.status(200).json({message: "admin deleted"})
    }
    catch (err) {
        res.status(404).json({message: "something went wrong"})
    }
})

module.exports = router;