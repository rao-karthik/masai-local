const User = require('../models/user.model');

const authorize = (permittedRoles) => {
    return async (req, res, next) => {
        // if there are no permitted role or permitted role is an empty array

        if (!permittedRoles) return next();

        // if permitted role, then check is the user has permission

        const user = req.user;
        const isAllowed = await User.findOne({
            _id: user._id,
            roles: {$in: permittedRoles}
        }).lean().exec();

        // if the user has permission then return next

        if(isAllowed) return next();
        
        // else return 403 forbidden error

        return res.status(401).json({
            status: 'failed',
            message: "You are not authorized to access this page"
        });
    };
};

module.exports = authorize;