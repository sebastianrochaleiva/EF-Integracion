const mongoose = require('mongoose');

const MeseroSchema = new mongoose.Schema({

  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  contraseña: { type: String, required: true },
  activo: { type: Boolean, default: true }, // Para eliminación lógica
});

module.exports = mongoose.model('Mesero', MeseroSchema);
