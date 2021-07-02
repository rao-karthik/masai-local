const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/', async (req, res)=>{
        const users = await User.find().select('-password').lean().exec();
        res.status(200).json({users});
});

module.exports = router;