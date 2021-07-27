const express = require('express');

const ArtistUser = require('../models/artistUser.model');
const protect = require('../middlewares/protect');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.get('/', async(req, res)=>{
    try {
        const page = +req.query.page | 1;
        const limit = +req.query.limit | 10;

        const offset = (page - 1) * limit;

        const users = await ArtistUser.find()
                                        .populate({path: 'albums'})
                                        .skip(offset)
                                        .limit(limit)
                                        .lean()
                                        .exec();

        res.status(200).json({
            status: 'success',
            users
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'err.message'
        })
    }
});

router.patch('/', protect, authorize(['user', 'admin', 'artist']), async(req, res)=> {
    try {
        const userId = req.user._id;

        const updatedUser = await ArtistUser.findByIdAndUpdate(userId, req.body, {new: true});

        res.status(201).json({
            status: 'suucess',
            user: updatedUser
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'err.message'
        })
    };
});

module.exports = router;