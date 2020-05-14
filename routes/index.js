const express = require('express'); //  using express

const Router = express.Router(); // using router

// route actions
Router.use('/questions',require('./questions'));
Router.use('/options',require('./options'));

module.exports = Router; // exporting router