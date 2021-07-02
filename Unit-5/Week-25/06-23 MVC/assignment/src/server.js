const express = require("express");
const connect = require('./config/db');
const userController = require('./controllers/user.controller');
const studentController = require('./controllers/student.controller');
const evaluationController = require('./controllers/evaluation.controller');
const resultController = require('./controllers/result.controller');

const app = express();

app.use(express.json());

app.use('/users', userController);
app.use('/students', studentController);
app.use('/evaluations', evaluationController);
app.use('/results', resultController);

const start = async ()=>{
    await connect();
    app.listen('2333', ()=>{
        console.log('Listening to port 2333');
    });
};

module.exports = start;