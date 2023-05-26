const mongoose = require('mongoose');
const contactsSchema = mongoose.Schema(

    {
        firstName: {
            type: String,
            required: [true, 'First name is required']
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        color: {
            type: String,
            required: [true, 'Color is required'],
        },
        birthdate: {
            type: Date,
            required: [true]
        },
    }, {
        timestamps: true,
    }
);

const contactsModel = mongoose.model('Contacts', contactsSchema);
module.exports = contactsModel;