const app = require('./index');
const connect = require('./config/db');

const start = async ()=>{
    await connect();

    app.listen(2333, ()=>{
        console.log('listening to port 2333');
    });
};

start();