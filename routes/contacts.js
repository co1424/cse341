const express = require('express');
const router = new express.Router();
const contactsController = require('../controllers/contacts.js');
const { validate } = require('../models/contactsModel.js');
const { contactValidationRules } = require('../validation/validator.js');

// Creates a new contact
router.post('/contact', contactValidationRules(),contactsController.createContact);
// Gets all contacts
router.get('/contacts', contactsController.getAllContacts);
// Gets a contact by id
router.get('/contact/:id', contactsController.getContactById);
// Updates a contact by id
router.put('/contact/:id', contactValidationRules(),contactsController.updateContactById);
// Deletes a contact by id
router.delete('/contact/:id', contactsController.deleteContactById);

module.exports = router;