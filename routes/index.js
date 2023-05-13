const routes = require('express').Router();
const contactsRoute = require('./contacts');

routes.use('/', require('./swagger'));
routes.use('/', contactsRoute);

module.exports = routes;