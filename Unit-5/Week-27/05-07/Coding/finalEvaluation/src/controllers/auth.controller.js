require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const newToken = (user) => {
    return jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
}

const register = async (req, res) => {
    const email = req.body.email;
    try {
        let user = await User.findOne({email}).lean().exec();

        if(user){
            return res.status(400).json({
                status: 'failed',
                message: 'user with same email id already exists'
            });
        };

        user = await User.create(req.body);

        const token = newToken(user);

        res.status(201).json({
            status: 'success',
            token,
            user
        });
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        let user = await User.findOne({email}).exec();

        if(!user) {
            return res.status(400).json({
                status: 'failed',
                message: 'Invalid email or password'
            });
        };
        
        const match = await user.checkPassword(password);
        console.log(match)
        
        if(!match) {
            return res.status(400).json({
                status: 'failed',
                message: 'Invalid email or password'
            });
        };
        
        console.log(user)
        const token = newToken(user);

        res.status(200).json({
            status: 'success',
            token
        });
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

module.exports = {
    register,
    login,
    newToken
}