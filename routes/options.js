const express = require('express'); // using express

const Router = express.Router(); // using router

// importing optionController from Controllers
const optionController = require('../controllers/optionController');

//  route action
Router.post('/:id/add_vote',optionController.addVote);
Router.delete('/:id/delete',optionController.deleteOption);

module.exports = Router; // exporting router