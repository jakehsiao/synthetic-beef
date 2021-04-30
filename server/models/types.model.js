const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
}, {
  timestamps: true,
});

const types = mongoose.model('types', typesSchema);

module.exports = types;