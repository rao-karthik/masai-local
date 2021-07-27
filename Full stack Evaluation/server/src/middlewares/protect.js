const jwt = require("jsonwebtoken");
require('dotenv').config();

const User = require('../models/artistUser.model');

const secretKey = process.env.JWT_SECRET_KEY || "";

const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, secretKey, (err, paylaod)=>{
            if(err) return reject(err);

            resolve(paylaod);
        });
    });
};

const protect = async (req, res, next)=>{ 

    const bearerToken = req.headers.authorization;

    if(!bearerToken || !bearerToken.startsWith('Bearer ')){
        return res.status(400).json({
            status: 'failed',
            message: 'Please provide bearer token'
        });
    };

    const token = bearerToken.split(' ')[1].trim();

    let payload;
    try {
        payload = await verifyToken(token);
    }
    catch (err) {
        return res.status(401).json({
            status: 'error',
            message: 'You are not authorized to access this page'
        });
    };

    let user;
    try {
        user = await User.findById(payload.id).lean().exec();
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: 'Something went wrong, please try again later'
        });
    };

    if(!user) {
        return res.status(400).json({
            status: 'failed',
            message: 'You are not authorized to access this page'
        });
    };

    req.user = user;

    next();
};

module.exports = protect;