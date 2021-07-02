const express = require('express');
const connect = require('./config/db');
const userController = require('./controllers/user.controller');
const adminController = require('./controllers/admin.controller');

const app = express();
app.use(express.json());

app.use('/user', userController);
app.use('/admin', adminController);

const start = async ()=>{
    await connect();
    app.listen('2333', ()=>{
        console.log('listening to port 2333');
    });
};

module.exports = start;