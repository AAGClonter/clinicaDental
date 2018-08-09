const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doneCitaSchema = new Schema({
    pacient: { type: String, required: true },
    reason: { type: String, required: true },
    completed: { type: Boolean, required: true },
    appoitment: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DoneCita', doneCitaSchema);