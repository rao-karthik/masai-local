require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const newToken = (user)=>{
    return jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY);
}

const register = async(req, res)=>{
    let email = req.body.email;
    try {
        // check if email exits or not

        let user = await User.findOne({email}).lean().exec();

        // if yes send error

        if(user){
            return res.status(400).json({
                status: 'failed',
                message: 'User with same email id already exists'
            });
        };

        // create user

        user = await User.create(req.body);
        const token = newToken(user);

        res.status(201).json({
            token,
            user
        })
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
};

const login = async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {
        // check if the user exists or not

        let user = await User.findOne({email}).exec();

        // if not then send error

        if(!user) {
            return res.status(400).json({
                status: 'failed',
                message: 'Incorrect email or password'
            });
        };

        // match Password

        const match = await user.checkPassword(password);

        // if password do not match then send error

        if(!match) {
            return res.status(400).json({
                status: 'failed',
                message: "Incorrect email or password"
            })
        }

        // send token

        const token = newToken(user);
        return res.status(200).json({token});
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {
    register,
    login
}