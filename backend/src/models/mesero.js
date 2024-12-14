const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MeseroSchema = new mongoose.Schema({

  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  contraseña: { type: String, required: true },
  activo: { type: Boolean, default: true }, // Para eliminación lógica
});

MeseroSchema.methods.validPassword = function (contraseña) {
  return bcrypt.compare(contraseña, this.contraseña);
}

module.exports = mongoose.model('Mesero', MeseroSchema);
