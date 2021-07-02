const express = require('express');
const user = require('../models/user.model');
const admin = require('../models/admin.model');
const transporter = require('../config/emailConfig');

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 10;

        const offset = (page-1)*limit;
        
        const data = await user.find().skip(offset).limit(limit).lean().exec();
        res.status(200).json({data});
    }
    catch (err) {
        res.status(404).json({message: "something went wrong"});
    }
});

router.post('/', async (req, res)=> {
    try {
        const inp = req.body;
        const data = await user.create(inp);
        const adminData = await admin.find({}, {email: true});
        
        adminData.map(item=>{
            const adminInfo = adminMail(item.email, inp.firstName, inp.lastName)
            transporter.sendMail(adminInfo, (err, result)=>{
                if(err){
                    console.log(err);
                }
                else {
                    console.log('admin mail sent successfully');
                }
            })
        })
S
        const userInfo = userMail(inp.email, inp.firstName, inp.lastName);
        transporter.sendMail(userInfo, (err, result)=>{
            if(err){
                console.log(err);
            }
            else {
                console.log('user mail sent successfully');
            }
        })
        res.status(201).json(data);
    }
    catch (err) {
        res.status(404).json({message: "error occured"});
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        await user.findByIdAndDelete(id);
        res.status(200).json({message: "user deleted"})
    }
    catch (err) {
        res.status(404).json({message: "something went wrong"})
    }
})

const userMail = (email, firstName, lastName)=>{
    
    let welcomeText = `Hi ${firstName}, Please confirm your email address`
    
    let info = {
        from: '"Masai School" <noreply@masai.school>',
        to: `${email}`, 
        subject: `Welcome to Masai School ${firstName} ${lastName}`,
        text: welcomeText,
        html: `<b>${welcomeText}</b>`,
    };
    
    return info;
}

const adminMail = (email, firstName, lastName)=>{
    
    let welcomeText = `Please welcome ${firstName} ${lastName}`
    
    let info = {
        from: '"Masai School" <noreply@masai.school>',
        to: `${email}`, 
        subject: `${firstName} ${lastName} has registered with us`,
        text: welcomeText,
        html: `<b>${welcomeText}</b>`,
    };
    
    return info;
}

module.exports = router;