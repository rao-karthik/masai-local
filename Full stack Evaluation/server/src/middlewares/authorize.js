const User = require('../models/artistUser.model');

const authorize = (permittedRoles) => {
    return async (req, res, next) => {

        if (!permittedRoles) return next();

        const user = req.user;
        const isAllowed = await User.findOne({
            _id: user._id,
            role: {$in: permittedRoles}
        }).lean().exec();

        if(isAllowed) return next();

        return res.status(401).json({
            status: 'failed',
            message: "You are not authorized to access this page"
        });
    };
};

module.exports = authorize;