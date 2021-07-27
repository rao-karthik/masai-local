require('dotenv').config();
const jwt = require('jsonwebtoken');

const User = require('../models/artistUser.model');

const secretKey = process.env.JWT_SECRET_KEY || '';

const newToken = (user)=>{
    return jwt.sign({id: user._id}, secretKey)
};

const register = async(req, res)=>{
    let email = req.body.email;
    try {

        let user = await User.findOne({email}).lean().exec();

        if(user){
            return res.status(400).json({
                status: 'failed',
                message: 'User with same email id already exists'
            });
        };

        user = await User.create(req.body);
        const token = newToken(user);

        res.status(201).json({
            token,
            user
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

const login = async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {

        let user = await User.findOne({email}).exec();

        if(!user) {
            return res.status(400).json({
                status: 'failed',
                message: 'Incorrect email or password'
            });
        };

        const match = await user.checkPassword(password);

        if(!match) {
            return res.status(400).json({
                status: 'failed',
                message: "Incorrect email or password"
            })
        }

        const token = newToken(user);
        return res.status(200).json({token});
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

module.exports = {
    register,
    login
}