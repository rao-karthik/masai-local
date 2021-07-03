const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, paylaod)=>{
            if(err) return reject(err);

            resolve(paylaod);
        });
    });
};

const protect = async (req, res, next)=>{ 
    // check if the token is provided in the header

    const bearerToken = req.headers.authorization;

    // if not or if there but not in correct format then send error

    if(!bearerToken || !bearerToken.startsWith('Bearer ')){
        return res.status(400).json({
            status: 'failed',
            message: 'Please provide bearer token'
        });
    };

    // if token is in valid format verify the token

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
    
    // if token is verified then fetch the user from payload id and attach user to the request

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

    // otherwise do next()

    next();
};

module.exports = protect;