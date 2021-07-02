const User =  require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const validator = require('../middlewares/validator');

const newToken = (user) => {
    return jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)
}

const register = async (req, res) => {
    try {
        // cheeck if the user already exists?
        let user = await User.findOne({email: req.body.email}).lean().exec();

        // if yes then send 400 error
        if (user) {
            return res.status(400).json({
                status: 'failed', 
                message: 'user already exists'
            });
        };

        // if not then create a new user
        user = await User.create(req.body);
        const token = newToken(user);

        res.status(201).json({token});
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
};

const signIn = async (req, res) => {
    try {
        // check if the user exists or not
        const user = await User.findOne({ email: req.body.email }).exec();

        // if user don't exist send 404 error
        if (!user) {
            return res.status(401).json({
                status: 'failed',
                message: 'Incorrect email or password'
            });
        };

        // if the user exists check password with password in database

        const match = user.checkPassword(req.body.password);

        if(!match) {
            return res.status(400).json({
                status: 'failed',
                message: 'Incorrect email or password'
            });
        };

        const token = newToken(user);
        res.status(201).json({token})
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {
    signIn,
    register
};