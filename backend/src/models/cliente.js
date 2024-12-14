const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  dni: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
