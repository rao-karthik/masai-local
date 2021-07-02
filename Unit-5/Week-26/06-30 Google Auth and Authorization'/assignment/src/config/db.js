const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect('mongodb://localhost:27017/oAuth', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
};

module.exports = connect;