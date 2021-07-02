const express = require('express');
const fs = require('fs');
const router = express.Router();

const user = require('../models/user.model');
const upload = require('../utils/fileUpload');
const gallery = require('../models/gallery.model');

router.get('/', async (req, res)=>{
    const data = await user.find().lean().exec();
    res.status(200).json({users: data});
});

router.get('/:id', async (req, res)=>{
    const id = req.params.id;

    const data = await user.findById(id).lean().exec();
    res.status(200).json({users: data});
});

router.post('/', upload.single('profilePic'), async(req, res)=>{
    const data = await user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        profilePicUrl: req.file.path
    });
    res.status(201).json({user: data});
});

router.patch('/profilePic/:id', upload.single('profilePic'), async (req, res) => {
    const id = req.params.id;

    const userData = await user.findById(id).lean().exec();
    fs.unlinkSync(userData.profilePicUrl);

    const data = await user.findByIdAndUpdate(id, {profilePicUrl: req.file.path}, {new: true});
    res.status(201).json({user: data});
});

router.delete('/profilePic/:id', async(req, res)=>{
    const id = req.params.id;

    const userData = await user.findById(id).lean().exec();;
    fs.unlinkSync(userData.profilePicUrl);
    await user.findByIdAndUpdate(id, {profilePicUrl: ""});
    const updatedData = await user.findById(id).lean().exec();;
    res.status(201).json({message: "image deleted", user: updatedData});
});

router.delete('/:id', async(req, res)=>{
    const id = req.params.id;

    const images = await gallery.find({userId: id}).lean().exec();
    images.map(imgArr=> (imgArr.pictures.map(pic => pic && fs.unlinkSync(pic))));

    const userData = await user.findById(id).lean().exec();;
    userData.profilePicUrl && fs.unlinkSync(userData.profilePicUrl);

    await user.findByIdAndRemove(id);
    await gallery.deleteMany({userId: id});
    res.status(201).json({message: "user deleted"});
});

module.exports = router;