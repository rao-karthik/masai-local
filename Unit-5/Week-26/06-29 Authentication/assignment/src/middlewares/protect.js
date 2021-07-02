const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const verifyToken = (token)=>{
    return new Promise ((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload)=>{
            if(err) return reject(err);

            return resolve(payload);
        });
    });
};

const protect = async (req, res, next) => {
    // if bearer token is provided in the header
    const bearerToken = req.headers.authorization;
        
    // if token in not there then send error response of 400 bad request
    if(!bearerToken){
        return res.status(400).json({
            status: "error",
            message: "Please provide bearer token"
        });
    };

    // check if the token is in correct format or not
    //if not send error 400 bad request
    if(!bearerToken.startsWith('Bearer ')){
        return res.status(400).json({
            status: 'error',
            message: "Please provide the bearer token."
        })
    }

    const token = bearerToken.split(' ')[1].trim();

    let payload;

    try {
        payload = await verifyToken(token);
    }
    catch (err) {
        return res.status(401).json({
        status: "failed",
        message: "You are not authorized to access this page",
        });
    }

    // fetch the user using payload id
    let user;

    try {
        user = User.findById(payload.id).lean().exec();
    }
    catch (err) {
        return res.status(500).json({
            status: "failed",
            message: "Something went wrong .. please try again later",
        });
    }
    
    if (!user) {
        return res.status(401).json({
            status: "failed",
            message: "You are not authorized to access this page",
        });
    }
    
    req.user = user;

    next();
};

module.exports = protect;