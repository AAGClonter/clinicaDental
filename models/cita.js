const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citaSchema = new Schema({
    pacient: { type: String, required: true },
    appoitment: { type: Date, default: Date.now},
    reason: { type: String, required: true },
    completed: { type: Boolean, required: true }
});

module.exports = mongoose.model('Cita', citaSchema);