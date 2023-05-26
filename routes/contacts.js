const express = require('express');
const router = new express.Router();
const contactsController = require('../controllers/contacts.js');
const { contactValidationRules, validate } = require('../validation/validator.js');


// Creates a new contact
router.post('/contact', contactValidationRules(), validate, contactsController.createContact);
// Gets all contacts
router.get('/contacts', contactsController.getAllContacts);
// Gets a contact by id
router.get('/contact/:id', contactsController.getContactById);
// Updates a contact by id
router.put('/contact/:id', contactValidationRules(), validate, contactsController.updateContactById);
// Deletes a contact by id
router.delete('/contact/:id', contactsController.deleteContactById);

module.exports = router;