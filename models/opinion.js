const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    opinion: { type: String, required: true }
});

module.exports = mongoose.model('Opinion', schema);