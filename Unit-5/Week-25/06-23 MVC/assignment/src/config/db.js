const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://assignment:backend@assignments.cdhvb.mongodb.net/studentDb?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

module.exports = connect;