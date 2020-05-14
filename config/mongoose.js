const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/poll',{useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',function(){
    console.log('Connected to db :: MongoDB')
});

module.exports = db;