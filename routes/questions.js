const express = require('express'); // using express

const Router = express.Router(); // using router

// importing questionController from questions
const questionController = require('../controllers/questionController');

// route action
Router.post('/create',questionController.create);

Router.get('/:id',questionController.getQuestion);

Router.post("/:id/options/create", questionController.addOption);

Router.delete('/:id/delete',questionController.deleteQuestion);

module.exports = Router; // exporting router