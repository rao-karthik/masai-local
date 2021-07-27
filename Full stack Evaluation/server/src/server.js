const connect = require('./config/db');
const app = require('./index');
require('dotenv').config();

const port = process.env.PORT;

const start = async ()=>{
    await connect();
    app.listen(port, ()=>{
        console.log(`listening to port ${port}`);
    });
};

start();