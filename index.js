// importing packages
const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser')

// using express
const app = express();

// using parser and encoder
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

// routes
app.use('/', require('./routes/index'));

// listening to server
app.listen(3000,(err) => {
    if(err){
        console.log('Error inlistening to server');
    }
    console.log('server running in port 3000');
})