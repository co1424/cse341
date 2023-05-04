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
            required: [true, 'Favorite color is required'],
        },
        birthdate: {
            type: Date,
            required: [false]
        },
    }, {
        timestamps: true,
    }
);

const contactsModel = mongoose.model('Contacts', contactsSchema);
module.exports = contactsModel;