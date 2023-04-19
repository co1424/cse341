const routes = require('express').Router();
const myController = require('../controllers');


routes.get('/', myController.greatFunction);

routes.get('/guapo', myController.returnAnotherPerson);

module.exports = routes;