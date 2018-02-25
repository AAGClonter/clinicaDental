const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    slide: { type: String },
    image: { type: String },
    href: { type: String }
});

module.exports = mongoose.model('Image', schema);