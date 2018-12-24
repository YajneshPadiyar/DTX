const mongoose = require('mongoose');
const contact = new mongoose.Schema(
    {
        name    : String,
        lastName: String,
        avatar : String,
        nickname: String,
        company : String,
        jobTitle: String,
        email   : String,
        phone  : String,
        address : String,
        birthday: String,
        notes   : String
    }
);
module.exports = mongoose.model('contact', contact);
