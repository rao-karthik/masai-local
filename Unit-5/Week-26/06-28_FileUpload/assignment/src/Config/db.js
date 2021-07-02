const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect('mongodb://localhost:27017/upload', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
};

module.exports = connect;